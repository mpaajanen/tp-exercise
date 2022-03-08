import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeTargets } from './reducers/targetReducer'
import TargetList from './components/TargetList'

const App = () =>  {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeTargets())
  }, [dispatch])

  return (
    <div>
      <h1>Otsikko</h1>
      <TargetList />
    </div>
  )
}

export default App