
import './App.css'
import { Routes,Route,Navigate } from 'react-router-dom'
import Admin from './layouts/admin';
import Auth from './layouts/auth'

function App() {


  return (
    <>
     <Routes>
     <Route path="auth/*" element={<Auth />} />
     <Route path='admin/*' element={<Admin/>}/>
     <Route path="/" element={<Navigate to="/auth" replace />} />
     </Routes>
    </>
  )
}

export default App
