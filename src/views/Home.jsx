import React from 'react'
import GuestBook from '../components/GuestBook/GuestBook'
import EntryList from '../components/EntryList/EntryList'
import { EntryProvider } from '../context/EntryContext'

export default function Home() {
    return (
        <div>
            <EntryProvider>
            <GuestBook />
            <EntryList />
            </EntryProvider>
        </div>
    )
}
