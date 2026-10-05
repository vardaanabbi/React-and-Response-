import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

// in redux also we need a providr which we get from react-redux and we need to pass props too which is known as store in redux and name of our store is also store . 

// we can wrap this provider here also and in App.jsx also ! your wish
