import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Target from './routes/Target'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }>
          <Route path='*' element={ <div>Sivua ei löytynyt.</div> } />
        </Route>
        <Route path='targets/:targetId' element={ <Target /> } />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)