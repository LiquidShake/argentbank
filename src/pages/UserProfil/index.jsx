import { useEffect } from 'react'
import Account from './Account'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import './userprofil.scss'
import UserNameForm from './UserNameForm'

export default function UserProfil() {
  let navigate = useNavigate()

  const { token } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])

  return (
    <main>
      <UserNameForm />
      <h2 className="sr-only">Accounts</h2>
      <Account accNumber='8349' amount='2,082.79'/>
      <Account accNumber='6712' amount='10,928.42'/>
      <Account accNumber='8349' amount='184.30'/>
    </main>
  )
}