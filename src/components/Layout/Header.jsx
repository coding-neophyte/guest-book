import React from 'react'
import useAuth from '../../hooks/useAuth';

export default function Header() {
    const { user } = useAuth();
    return (
        <div>
            <div className='h2'>
           {user ? <h2>{`Hello ${user}`}</h2> : <h2>{`Please Sign In`}</h2>}
           </div>
        </div>
    )
}
