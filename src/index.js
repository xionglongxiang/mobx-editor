import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import stores from './store'
const rootElement = document.getElementById('root')

if (rootElement instanceof Element) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Provider {...stores}>
        <App state={stores.state} />
      </Provider>
    </React.StrictMode>
  )
  reportWebVitals()
} else {
  console.error('Failed to find root element')
}
