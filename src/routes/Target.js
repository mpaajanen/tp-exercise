import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Target = () => {
  let params = useParams()
  const targets = useSelector(state => state.targets)
  const target = targets.giftTargets.find((t) => t.giftTargetId === params.targetId)

  return (
    <div>
      <Link to={'/'}>Takaisin</Link>
      <h2>{target.name}</h2>
      <h2>{target.type}</h2>
      <h2>{target.paymentCode}</h2>
    </div>
  )
}

export default Target