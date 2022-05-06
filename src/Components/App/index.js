import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";

import Main from "./../Main/"
// import NewIn from "./../NewIn/"
// import NewOut from "./../NewOut/"
import SignIn from "./../SignIn/"
import SignUp from "./../SignUp/"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/main" element={<Main/>}/>
                {/* <Route path="/new-in" element={<NewIn/>}/>
                <Route path="/new-out" element={<NewOut/>}/> */}
            </Routes>
        </BrowserRouter>
    )
} 