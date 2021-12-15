import React from 'react'
import { UseUser } from '../../context/UserContext'

export default function Header() {
    const { user } = UseUser();
    return (
        <div>
            <div className='h2'>
           {user ? <h2>{`Hello ${user}`}</h2> : <h2>{`Please Sign In`}</h2>}
           </div>
        </div>
    )
}
