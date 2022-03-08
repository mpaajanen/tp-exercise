import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'
import { Button, Space } from 'antd'

const TargetList = () => {
  const targets = useSelector(state => state.targets)
  if (targets.length===0) {
    return (
      <div>Ladataan...</div>
    )
  }
  return (
    <div>
      <Space direction='vertical' size={'large'}>
        {targets.giftTargets.map(target =>
        <div key={target.giftTargetId}>
            <Button type='default' size='large'>
              <Link
                to={`targets/${target.giftTargetId}`} 
                key={target.giftTargetId}>
                {target.name}
              </Link>
            </Button>
        </div>
        )}
      </Space>
    <Outlet />
    </div>
  )

}

export default TargetList