import React from 'react'
import { render } from '@testing-library/react'
import { EntryProvider } from '../context/EntryContext'
import { UserProvider } from '../context/UserContext'
import Home from './Home'

it.skip('should render Home page', () => {
  const { container } = render(
    <EntryProvider>
    <UserProvider>
        <Home />
     </UserProvider>
    </EntryProvider>)
  expect(container).toMatchSnapshot()
})
