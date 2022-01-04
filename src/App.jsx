import Home from "./views/Home"
import Layout from "./views/Layout"
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './context/ProvideAuth'
import  PrivateRoute  from './components/PrivateRoute'
import Login from "./views/Login"

export default function App() {
  return(
    <>
    <AuthProvider>
      <Router>
        <Layout />
        <Switch>
        <PrivateRoute exact path='/'>
        <Home />
        </PrivateRoute>
        <Route exact path='/login'>
              <Login />
          </Route>
        </Switch>
        </Router>
      </AuthProvider>
    </>
    )
}
