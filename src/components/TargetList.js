import React from 'react'
import { useSelector } from 'react-redux'

const TargetList = () => {
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
        <div key={target.giftTargetId}>
          <div>
            {target.name}
          </div>
        </div>
      )}
    </div>
  )

}

export default TargetList