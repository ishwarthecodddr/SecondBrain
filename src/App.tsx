import { Dashboard } from './pages/Dashboard'
import Signup from './auth/Signup'
import Signin from './auth/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route >
        </Routes >
      </BrowserRouter >
    </div >
  )
}

export default App
