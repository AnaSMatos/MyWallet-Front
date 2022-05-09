import{Link, useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"


export default function SigIn({setToken}){
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        const URL = "http://localhost:5000/sign-in"
        const promisse = axios.post(URL, {
            email, password
        })

        promisse.then(response => {
            setToken(response.data);
            navigate("/main")
        });

        promisse.catch(error => {
            alert(error.response.data)
        })
    }

    return(
        <Container>
            <Logo>
                <h1>My Wallet</h1>
            </Logo>
            <Form onSubmit={handleSubmit}>
                <input type="email" placeholder="E-mail" required value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="password" placeholder="Senha" required value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button type="submit" onClick={handleSubmit}><p>Entrar</p></button>
            </Form>
            <StyledLink to={"/sign-up"}>Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    background: #8C11BE;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
` 

const StyledLink = styled(Link)`
    color: white;
    font-weight: 700;
    font-size: 15px;
    margin-top: 35px;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
`

const Logo = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    h1{
        font-family: 'Saira Stencil One', sans-serif;
        font-size: 35px;
        color: #FFFFFF;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 180px;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    input{
        width: 87%;
        height: 58px;
        border: none;
        border-radius: 5px;
        padding: 16px;
        box-sizing: border-box;
        font-size: 20px;
    }
    input:focus{
        outline: none;
    }
    input::placeholder{
        color: #000000;
        font-size: 20px;
        font-weight: 500;
    }
    button{
        width: 87%;
        height: 46px;
        border: none;
        border-radius: 5px;
        background: #A328D6;
        p{
            font-size: 20px;
            color: #FFFFFF;
            font-weight: bold;
        }
    }
`