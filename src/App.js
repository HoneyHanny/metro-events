import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='login' element={<Login />} />
                <Route exact path='signup' element={<SignUp />} />
                <Route path='/' element={<Navigate to='login' />} />
            </Routes>
        </Router>
    )
}

export default App
