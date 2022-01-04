import React from 'react'
import { render } from '@testing-library/react'
import { EntryProvider } from '../context/EntryContext'
import { AuthProvider } from '../context/ProvideAuth'
import Home from './Home'

it('should render Home page', () => {
  const { container } = render(
    <EntryProvider>
    <AuthProvider>
        <Home />
     </AuthProvider>
    </EntryProvider>)
  expect(container).toMatchSnapshot()
})
