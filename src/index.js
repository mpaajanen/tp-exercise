import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Page1 from './routes/Page1'
import Page2 from './routes/Page2'
import Targets from './routes/Targets'
import Target from './routes/Target'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }>
          <Route path='page1' element={ <Page1 /> } />
          <Route path='page2' element={ <Page2 /> } />
          <Route path='targets' element={ <Targets /> } >
            <Route path=':targetId' element={ <Target /> } />
          </Route>
          <Route path='*' element={ <div>Sivua ei löytynyt.</div> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)