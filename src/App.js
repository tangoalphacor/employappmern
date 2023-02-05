import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Courses from './components/courses';
import Employ from './components/Employ';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/employ" element={<Employ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
