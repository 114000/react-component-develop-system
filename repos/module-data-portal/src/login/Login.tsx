import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalModule } from '@legend/helper-react-hooks'
import { portalModule, PortalActionTypes } from '../../config'
import { NormalLogin } from '@legend/ui'
const Login: FC<{}> = (props) => {

  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { state, dispatch } = useGlobalModule(portalModule.name)

  function handleLoginSubmit (username: string, password: string) {
    dispatch(PortalActionTypes.updatePortalState, { username, password })
    history.replace('/label-market')
  }

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      background: '#777'
    }}>
      {/* Login View */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: '10%',
        width: 300,
        height: 300,
        margin: 'auto',
        background: '#f7f7f7'
      }}>
        <NormalLogin onSubmit={(username, password) => {
          handleLoginSubmit(username, password)
        }}></NormalLogin>
      </div>
    </div>
  )
}

export { Login }