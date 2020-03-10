import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { ConnectedRouter } from 'connected-react-router'
import store from './redux'
import theme from './config/theme'
import Root from './components/Root'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Root />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
