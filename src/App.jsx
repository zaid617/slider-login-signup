import LoginSignUp from "./components/loginSignup/LoginSignUp";
import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/Context.js";
import Home from "./components/Home/Home";

function App() {

  let { state, dispatch } = useContext(GlobalContext);

  return (


<>
    
    {  
      (state?.isLogin === null || false) ?
      <Routes>
            <Route path='/' exact element={<LoginSignUp/>}/>
         <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        :
       <Routes> 
          <Route path='/' exact element={<Home />}/>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
   }

  </>
  
  )
}

export default App;
