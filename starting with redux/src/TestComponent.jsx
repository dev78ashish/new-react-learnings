import React from 'react'
import { useSelector } from 'react-redux'

const TestComponent = () => {

  const count = useSelector((state) => state.counter.value)

  return (
    <div>{count}</div>
  )
}

export default TestComponent