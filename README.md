# react-heap
React component which mounts Heap script and manages user identity via props

## Installation
```bash
npm i react-heap --save
or
yarn add react-heap
```

## Usage
```jsx
import Heap from 'react-heap'

const ReactApp = () =>
  {process.env.NODE_ENV === 'production' && <Heap 
    appId="your-heap-app-id" 
    userId="john@snow.com" 
    userData={{firstName: 'John', lastName: 'Snow'}} 
  />}
```
*`appId` is required*

## Usage with redux
```jsx
import { connect } from 'react-redux'
import Heap from 'react-heap'

export default connect(state => ({
  appId: state.getIn([ 'analytics', 'heap', 'appId' ]),
  userId: state.getIn([ 'auth', 'user', 'email' ]),
  userData: state.getIn([ 'auth', 'user' ]),
})(Heap)
```
