import React from 'react'
import PropTypes from 'prop-types'

const canUseDOM = !!(
  (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
)

export const HeapAPI = (...args) => {
  if (canUseDOM && window.heap) {
    window.heap.apply(null, args);
  } else {
    console.warn('Heap not initialized yet');
  }
}

const injectScript = (appId) => {
  if (!canUseDOM) {
    return
  }

  (function (window, document, appId) {
    window.heap = window.heap || [], heap.load = function (e, t) {
      window.heap.appid = e, window.heap.config = t = t || {};
      var r = t.forceSSL || "https:" === document.location.protocol, a = document.createElement("script");
      a.type = "text/javascript", a.async = !0, a.src = (r ? "https:" : "http:") + "//cdn.heapanalytics.com/js/heap-" + e + ".js";
      var n = document.getElementsByTagName("script")[0];
      n.parentNode.insertBefore(a, n);
      for (var o = function (e) {
        return function () {
          heap.push([e].concat(Array.prototype.slice.call(arguments, 0)))
        }
      }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], c = 0; c < p.length; c++) heap[p[c]] = o(p[c])
    };
    heap.load(appId);
  })(window, document, appId)
}

export default class Heap extends React.Component {
    static propTypes = {
        appId: PropTypes.string.isRequired,
        userId: PropTypes.string,
        userData: PropTypes.shape({}),
    }

    shouldComponentUpdate() {
      return false;
    }

    componentDidMount() {
      if (!canUseDOM) {
        return
      }

      const {appId, userId, userData} = this.props
      if (!window.heap && appId) {
        injectScript(appId)
        if (window.heap) {
          if (userId) {
            window.heap.identify(userId)
          }
          if (userData) {
            window.heap.addUserProperties(userData)
          }
        }
      }
    }

    componentWillReceiveProps(nextProps) {
      if (!canUseDOM) {
        return
      }

      if (nextProps.userId !== this.props.userId) {
        window.heap.identify(nextProps.userId)
      }

      if (nextProps.userData !== this.props.userData) {
        window.heap.addUserProperties(nextProps.userData)
      }
    }

    render() {
        return null
    }
}
