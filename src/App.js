import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import store from './redux'
import theme from './config/theme'
import Root from './components/Root'
import TodoList from './components/Test'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root />
        {/* <TodoList /> */}
      </ThemeProvider>
    </Provider>
  )
}

export default App
