import { useState, useEffect } from 'react'
import './signin.scss'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/loginAction'
import { useNavigate } from 'react-router'

export default function SignIn() {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const { token, error } = useSelector((state) => state.userLogin)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token, navigate])

  return (
    <main>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={submitHandler}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me" />
          </div>
          <button className="sign-in-button" type="submit" name="Login">Sign In</button>
          {error && (
            <div>
              {error}
            </div>
          )}
        </form>
      </section>
    </main>
  )
}
