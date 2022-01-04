import React from 'react'
import useAuth from '../hooks/useAuth'
import { useHistory, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    let history = useHistory()
    let location = useLocation()
    let auth = useAuth()
    let { from } = location.state || { from: { pathname: '/' }}

   const [error, setError] = useState(null)
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();

        const loginSuccess = auth.login(username, password)

       if (loginSuccess) {


        history.replace(from)
        } else {
            setError('Incorrect Username or Password')
        }

    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <fieldset>
                    <legend>Sign In</legend>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>

                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </fieldset>
                    <button>Signin</button>
            </form>
            {error && <h4>{error}</h4>}
        </div>
    )
}
