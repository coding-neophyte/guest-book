import React from 'react'
import { EntryProvider } from '../../context/EntryContext'

export default function Entry({ name, message }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{message}</p>

        </div>
    )
}
