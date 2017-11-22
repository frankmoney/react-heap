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
  <Heap 
    appId="your-heap-app-id" 
    userId="john@snow.com" 
    userData={{firstName: 'John', lastName: 'Snow'}} 
  />
```
*`appId` is required*
