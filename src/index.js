import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Page1 from './routes/Page1'
import Page2 from './routes/Page2'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> } />
      <Route path='/page1' element={ <Page1 /> } />
      <Route path='/page2' element={ <Page2 /> } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)