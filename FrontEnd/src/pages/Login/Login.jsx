import { useState } from "react"
import { UseAuth } from '../../components/context/authContext'
import { useNavigate } from 'react-router-dom'
import Style from "./Login.module.css"
import api from '../../components/api';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const { Login } = UseAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!Email.trim() || !password.trim()) {
      setError('Please Enter your Email and Password.')
      return
    }

    try {
      setIsSubmitting(true)
      const response = await api.post("dashboard/login", {
        email: Email.trim(),
        password: password,
      })

    console.log("SUCCESS:", response.data)

    localStorage.setItem("token", response.data.token)

    Login(response.data.user || null)

    if (response.data.user?.Role === "donor") {
      navigate('/Dashboard')
    }

  } catch (error) {
    console.log("ERROR:", error)

    setError(error.response?.data?.msg || 'Login failed. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
  }

  return (
    <>
    <div className={`${Style.page}`}>
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 py-5 px-3">
        <div className={`shadow-sm ${Style.logincard}`}>
          <div className="card-body p-4 p-md-5">

            <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
              <div className={`d-flex align-items-center justify-content-center ${Style.brandmark}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M8 8h6M8 12h8M8 16h5"/>
                </svg>
              </div>
              <h1 className={`mb-0 ${Style.brandname}`}>Flugur ERP</h1>
            </div>

            <div className="text-center mb-4">
              <h2 className={`mb-1 ${Style.welcome}`}>Welcome back</h2>
              <p className={`mb-0 ${Style.subtitle}`}>Please enter your enterprise credentials</p>
            </div>

            <form onSubmit={handleSubmit}>

              {error && <p className="text-danger mt-2 mb-0">{error}</p>}

              <div className="mb-3">
                <label htmlFor="email" className={`form-label ${Style.fieldlabel}`}>WORK EMAIL</label>
                <input type="email" id="email" className={`form-control  ${Style.fieldinput}`} placeholder="name@company.com" autoComplete="email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <label htmlFor="password" className={`form-label ${Style.fieldlabel} mb-0`}>PASSWORD</label>
                  <a href="#" className={`${Style.forgotlink}`}>Forgot Password?</a>
                </div>
                <div className="position-relative mt-2">
                  <input type={showPassword ? 'text' : 'password'} id="password" className={`form-control  ${Style.fieldinput} pe-5`} placeholder="••••••••" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <button type="button" className={`btn ${Style.togglepass}`} aria-label="Show password" onClick={() => setShowPassword((current) => !current)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="keep"/>
                <label className="form-check-label keep-label" htmlFor="keep">Keep me signed in</label>
              </div>

              <button type="submit" className= {`btn w-100 d-flex align-items-center justify-content-center gap-2 ${Style.btnsignin}`}>
                <span>{isSubmitting ? 'Logging in...' : 'Login'}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
              </button>

            </form>

            <hr className={`my-4 ${Style.divider}`}/>

            <div className="text-center small assist">
              Need assistance? <strong>Contact Administrator</strong>
            </div>
          </div>
        </div>

        <footer className={`text-center ${Style.footer} mt-4`}>
          © 2026 Flugur ERP SYSTEMS. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </div>
    </>
  )
}
