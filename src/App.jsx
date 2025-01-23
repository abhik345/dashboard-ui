
import './App.css'
import { Routes,Route,Navigate } from 'react-router-dom'
import Admin from './layouts/admin'

function App() {


  return (
    <>
     <Routes>
     <Route path='admin/*' element={<Admin/>}/>
      <Route path="/" element={<Navigate to="/admin" replace />} />
     </Routes>
    </>
  )
}

export default App
