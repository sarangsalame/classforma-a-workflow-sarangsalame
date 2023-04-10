import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import React, { useCallback } from 'react';
import './RFlow.css'

function RFlow({ nodes, edges, setEdges, setNodes }) {


  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);


  return (
    <div style={{ height: '95%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}

        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default RFlow;