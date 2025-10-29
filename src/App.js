import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';

function App() {


  return (
    <div >

      <BrowserRouter>

        <Routes>

          <Route path='/' element={
            <ProtectedRoute>
              <Home />
          </ProtectedRoute>
        } />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
