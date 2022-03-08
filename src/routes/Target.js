import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Card, Space, Typography } from 'antd'


const Target = () => {
  let params = useParams()
  const targets = useSelector(state => state.targets)
  const target = targets.giftTargets.find((t) => t.giftTargetId === params.targetId)

  return (
    <Row>
      <Col span={2}></Col>
      <Col span={20}>
        <div>
          <Space direction='vertical'>
            <Button size='large'>
              <Link to={'/'}>Takaisin</Link>
            </Button>
            <Card title={target.type}>
              <Typography.Text>{target.name}</Typography.Text><br />
              <Typography.Text>Maksukoodi: {target.paymentCode}</Typography.Text>
            </Card>
          </Space>
        </div>
      </Col>
      <Col span={2}></Col>
    </Row>
  )
}

export default Target