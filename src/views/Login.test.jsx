import { screen, render } from '@testing-library/react'
import Login from './Login'
import { MemoryRouter } from 'react-router-dom'
import { AuthProvider } from '../context/ProvideAuth'



it.only('should render login page', () => {
    const { container } = render(
    <MemoryRouter initialEntries={['/login']}>
        <AuthProvider>
        <Login />
        </AuthProvider>
    </MemoryRouter>)


    expect(container).toMatchSnapshot();
})
