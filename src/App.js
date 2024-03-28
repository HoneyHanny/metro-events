import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='home/*' element={<Home />} />
                <Route path='/' element={<Navigate to='login' />} />
            </Routes>
        </Router>
    );
}

export default App;
