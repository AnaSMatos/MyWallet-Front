import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";

import Main from "./../Main/"
import NewIn from "./../NewIn/"
import NewOut from "./../NewOut/"
import SignIn from "./../SignIn/"
import SignUp from "./../SignUp/"

export default function App(){
    const [token, setToken] = useState("")
    const [userData, setUserData] = useState([])
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn setToken = {setToken} token = {token}/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/main" element={<Main token = {token} setToken = {setToken} userData ={userData} setUserData = {setUserData}/>}/>
                <Route path="/new-in" element={<NewIn token = {token}/>}/>
                <Route path="/new-out" element={<NewOut token = {token}/>}/>
            </Routes>
        </BrowserRouter>  
    )
} 