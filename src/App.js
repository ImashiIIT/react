import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/Register/RegisterForm';
import Home from './Components/Home/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
