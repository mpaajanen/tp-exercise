import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeTargets } from './reducers/targetReducer'
import TargetList from './components/TargetList'

const App = () =>  {
  // const axios = require('axios').default

  // axios.get('https://test.tpfons.fi/tpdemo/ext/back/api/v1-0000/donation/targets')
  // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })

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