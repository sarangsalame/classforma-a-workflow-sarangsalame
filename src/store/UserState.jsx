import React, { useState } from 'react'
import UserContext from './UserContextData'
const UserState = (props) => {
  const [userName, setUserName] = useState("")

  function updateUser(user) {
    setUserName(user)
  }

  return (
    <UserContext.Provider value={{
      userName,
      updateUser,

    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState