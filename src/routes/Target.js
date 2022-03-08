import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'


const Target = () => {
  let params = useParams()
  return (
    <div>
      <Link to={'/'}>Takaisin</Link>
      <h2>Kohde: {params.targetId}</h2>
    </div>
  )
}

export default Target