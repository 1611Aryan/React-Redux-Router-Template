import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import store from 'redux/store.tsx'
import App from './App.tsx'
import GlobalStyle from './globalStyle.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <GlobalStyle />
    <Provider store={store} >
    <App />
    </Provider >
  </React.StrictMode>,
)
