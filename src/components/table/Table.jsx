import React, { useEffect, useState, useRef, useContext } from 'react'
import './Table.css'
import { useNavigate } from 'react-router-dom';

import UserContext from '../../store/UserContextData';

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  const dataref = useRef();

  const userInfo = useContext(UserContext)

  useEffect(() => {
    async function getApiData() {
      const fetchedData = await fetch('https://64307b10d4518cfb0e50e555.mockapi.io/workflow').then(res => res.json()).then(data => setTableData(data));
    }
    getApiData();
  }, [])


  function redirectTo(item) {
    const currUserName = item.name;
    userInfo.updateUser(currUserName)
    console.log(userInfo.userName)
    navigate('/designerpage')

  }
  return (
    <div className='table-wrapper'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Input Type</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length < 1 ? <tr><td>Getting Data</td></tr> :
            tableData.map((item) => {
              return (
                <tr key={item.id + Math.random().toFixed(3)}>
                  <td ref={dataref} onClick={() => {
                    redirectTo(item)
                  }}>{item.name}</td>
                  <td>{item.input_type.toUpperCase()}</td>
                  <td>{item.createdAt.slice(0, 10)}</td>

                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Table