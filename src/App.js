import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeTargets } from './reducers/targetReducer'
import TargetList from './components/TargetList'
import './App.css'
import { Typography, Row, Col } from 'antd'

const App = () =>  {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeTargets())
  }, [dispatch])

  return (
    <Row>
      <Col span={2}></Col>
      <Col span={20}>
        <div>
          <Typography.Title level={1}>Tietopiiri Frontend-tehtävä</Typography.Title>
          <Typography.Title level={2}>Valitse lahjoituskohteesi seuraavista vaihtoehdoista:</Typography.Title>
          <TargetList />
        </div>
      </Col>
      <Col span={2}></Col>
    </Row>
  )
}

export default App