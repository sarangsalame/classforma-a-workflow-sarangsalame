import React, { useEffect, useState } from 'react'
import './ModuleComp.css'
const ModuleComp = ({ item, nodes, setNodes, name, input_type, output_type }) => {
  let node = {
    id: item.id,
    data: { label: item.name },
    position: { x: 100 + Number(Math.random() * 100), y: 200 + Number(Math.random() * 500) },
  }
  return (
    <div className='moduleComp' onClick={() => setNodes([...nodes, node])}>
      <div className='inptype'>{input_type.toUpperCase()}</div>
      <div className='modulename'>{name}</div>
      <div className='opttype'>{output_type.toUpperCase()}</div>

    </div>
  )
}

export default ModuleComp