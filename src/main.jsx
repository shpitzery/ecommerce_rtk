import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}> {/* supplies the Redux store to all components within its hierarchy by passing store as props. This allows components to access and interact with the Redux store for state management. */}
    <App />
    </Provider>
  </React.StrictMode>,
)