import { Link } from 'react-router-dom'
import './register.scss'

function Register() {
  return (
    <div className='register' >
      <div className="card">
        <div className="left">
          <h1>Antares Social</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.</p>
          <span>Do you have an account?</span>
          <Link to="/login" >
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder='username' />
            <input type="text" placeholder='Name' />
            <input type="password" placeholder='Password' />
            <input type="email" placeholder='Email' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Register