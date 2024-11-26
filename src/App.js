import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/Register/RegisterForm';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Event from './Components/Event/Event';
import Section from './Components/Section/Section';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path='/home' element={<Home/>}/>
                <Route path='/booking'element={<Booking/>}/>
                <Route path='/event' element={<Event/>}/>
                <Route path='/section'element={<Section/>}/>
            </Routes>
        </Router>
    );
}

export default App;
