import { useParams } from "react-router-dom"

const Target = () => {
  let params = useParams()
  return (
    <h2>Kohde: {params.targetId}</h2>
  )
}

export default Target