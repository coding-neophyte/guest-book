import React from 'react'
import { useState } from 'react'
import { useEntry } from '../../context/EntryContext'
import useAuth from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom'

export default function GuestBook() {
    const [name, setName] = useState('')
    const [guestEntry, setGuestEntry] = useState('')
    const {entry, setEntry} = useEntry()
    const {user, setUser} = useAuth()
    const history = useHistory();
    let auth = useAuth();

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!guestEntry) return
        // setUser(user)
        setEntry([...entry, {name: user, message: guestEntry}])
        setGuestEntry('')
    }

    const inputGuestName = (
        <>
        <label htmlFor='guestname'>Guest Name:</label>
        <input className='nameInput' type='text' id='guestname' name='guestname' value={name} onChange={(e) => setName(e.target.value)} />
        </>
    )

     const handleLogout = () => {
        const signout = auth.logout()

        if(signout){
            history.replace('/login')
        }
     }

    const welcomeMessage = user ? `Welcome ${user}`: 'Please Sign the Guestbook'

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}> {welcomeMessage} </h2>

            <form onSubmit={handleSubmit}>
                {user ? null : inputGuestName }
                <label htmlFor='guestentry'>Guest Entry</label>
                <textarea type='textarea' id='guestentry' name='guestentry' value={guestEntry} onChange={(e) => setGuestEntry(e.target.value)} />
                <button type='submit'>Sign</button>
                {user && (
                    <button type='button' onClick={() => handleLogout()}>
                        Not {user} ?
                    </button>
                )}
            </form>

        </div>
    )
}
