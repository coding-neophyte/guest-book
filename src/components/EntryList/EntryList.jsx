import React from 'react'
import { useEntry } from '../../context/EntryContext'
import Entry from '../Entry/Entry'


export default function EntryList() {
    const { entry } = useEntry()
    return (
        <div>
            <ul>
            {entry.map((entries) => {
                return (
                    <li key={entries.message}>
                        <Entry name={entries.name} message={entries.message} />
                    </li>
                )
            })}

        </ul>
        </div>
    )
}
