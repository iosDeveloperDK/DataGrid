import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import store from './redux'
import theme from './config/theme'
import Root from './components/Root'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </Provider>
  )
}

export default App
