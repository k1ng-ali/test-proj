import './App.css'
import {Routes, Route} from 'react-router-dom'
import Success from "./pages/Success.tsx";
import CheckProfile from "./pages/CheckProfile.tsx";
import LoginByCode from "./pages/LoginByCode.tsx"
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={ <LoginByCode/>}/>
            <Route path={"/CheckProfile"} element={<CheckProfile/>}/>
            <Route path={"Success"} element={<Success/>}/>
        </Routes>
    </div>
  )
}

export default App
