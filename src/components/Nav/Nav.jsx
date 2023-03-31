import logo from '../../img/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/logoutAction'
import './nav.scss'
import { Link } from 'react-router-dom'

export default function Nav() {
  const dispatch = useDispatch()

  const { firstName } = useSelector((state) => state.userProfile)

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {firstName && (
        <div>
          <Link to='/profile'>
            <i className="fa fa-user-circle"></i>
            {firstName}
          </Link>
          <span onClick={ () => dispatch(logout()) }>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </span>
        </div>
      )}
      {!firstName && (
        <div>
          <Link to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  )
}
