import Login from "./Login"
import Signup from "./Signup"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'

function App() {

  //creating all the routes
  return (
    <BrowserRouter> //format for routing
      <Routes> //foratmat 2
        <Route path="/" element={<Home />}></Route> // for homepage
        <Route path="/register" element={<Signup />}></Route> //for register
        <Route path="/login" element={<Login />}></Route> //for login
        <Route path="/dashboard" element={<Dashboard />}></Route>  //for dashboard
      </Routes>
    </BrowserRouter>
  )
}

export default App
