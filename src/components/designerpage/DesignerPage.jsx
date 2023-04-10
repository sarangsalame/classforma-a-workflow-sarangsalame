import React, { useContext, useEffect, useState } from 'react'
import './DesignerPage.css'
import Header from '../header/Header'
import UserContext from '../../store/UserContextData'
import ModuleComp from '../modulecomp/ModuleComp'
import RFlow from '../reactflow/RFlow'
const DesignerPage = () => {
  const { userName } = useContext(UserContext)
  const [moduleList, setModuleList] = useState([])
  const [page, setPage] = useState(1)

  const [nodes, setNodes] = useState([{
    id: '0',
    position: { x: 400, y: 100 },
    data: { label: 'Input' },
    type: 'input',
  }])
  const [edges, setEdges] = useState([])

  useEffect(() => {
    async function getModuleListData() {
      const fetchedData = await fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=${page}&limit=5`).then(res => res.json()).then(data => setModuleList(data));
    }
    getModuleListData();
  }, [page])

  function setCurrPage(flag) {
    if (flag === "prev") {
      if (page === 1) {
        return
      }
      setPage((pag) => pag - 1)
    }
    if (flag === "next") {
      if (page === 20) {
        return
      }
      setPage((pag) => pag + 1)
    }
  }
  return (
    <div className='designerPage'>
      <Header title={`Workflow Name: ${userName ? userName : "User"}`} />
      <div className='content'>
        <section className='module_container-wrapper'>
          <div className='module_heading'><h3>Module</h3>
            <div className='module_list'>
              {
                moduleList.map((ele) => {
                  return <ModuleComp nodes={nodes} setNodes={setNodes} item={ele} key={ele.id} name={ele.name} output_type={ele.output_type} input_type={ele.input_type} />
                })
              }

            </div>
            <div className='page_toggler'>
              <button onClick={() => setCurrPage("prev")}>&#60;</button>
              <div className='page_list'>
                {page !== 1 && <span>{page - 1}</span>}
                <span className='curr_page'>{page}</span>
                {page !== 20 && <span>{page + 1}</span>}
              </div>
              <button onClick={() => setCurrPage("next")}>&#62;</button>
            </div>
          </div>
        </section>
        <section className='playground'>
          <RFlow nodes={nodes} edges={edges} setNodes={setNodes} setEdges={setEdges} />
        </section>

      </div>
    </div>
  )
}

export default DesignerPage