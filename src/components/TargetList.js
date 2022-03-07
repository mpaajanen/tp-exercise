import React from "react"
import { useSelector } from "react-redux"

const TargetList = () => {
  const targets = useSelector(state => state.targets)
  console.log(targets)

  return (
    <div>
    </div>
  )

}

export default TargetList