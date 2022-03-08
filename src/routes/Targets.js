import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'


const Targets = () => {
  const targets = useSelector(state => state.targets)
  // console.log(targets)
  if (targets.length===0) {
    return (
      <div>Ladataan...</div>
    )
  }
  return (
    <div>
      {targets.giftTargets.map(target =>
        <div>
          <Link
            to={`targets/${target.giftTargetId}`} 
            key={target.giftTargetId}>
              {target.name}
          </Link>
        </div>
      )}
      <Outlet />
    </div>
  )

}

export default Targets