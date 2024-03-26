import { Switch, Router } from 'react-router-dom'
import logo from './logo.svg'
import Login from './Pages/Login'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='login' component={<Login />} />
                <Redirect from='/' to='login' />
            </Switch>
        </Router>
    )
}

export default App
