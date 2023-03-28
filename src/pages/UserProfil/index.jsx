import React from 'react'
import Account from './Account'
import './userprofil.scss'

export default function UserProfil() {
  return (
    <main>
        <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account accNumber='8349' amount='2,082.79'/>
        <Account accNumber='6712' amount='10,928.42'/>
        <Account accNumber='8349' amount='184.30'/>
    </main>
  )
}