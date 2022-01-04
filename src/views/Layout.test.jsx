import { render } from '@testing-library/react'
import Layout from './Layout'
import { EntryProvider } from '../context/EntryContext'
import { AuthProvider } from '../context/ProvideAuth'



it('should render layout', () => {
    const {container} = render(
        <EntryProvider>
        <AuthProvider>
            <Layout />
        </AuthProvider>
        </EntryProvider>
    )

    expect(container).toMatchSnapshot()
})
