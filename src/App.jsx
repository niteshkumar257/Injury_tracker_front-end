import React from 'react'
import { Analytics,InjuryList,CreateInjury,Login } from './Pages'
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Navigate to='login'/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/analytics' element={<Analytics/>}/>
       <Route path='/createInjury' element={<CreateInjury/>}/>
       <Route path='/injurylist' element={<InjuryList/>}/>
      </Routes>
    </Router>
  )
}

export default App