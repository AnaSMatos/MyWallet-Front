import{Link, useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"

export default function SigIn(){
    return(
        <Container>
            <Logo>
                <h1>My Wallet</h1>
            </Logo>

            <Form>
                <input type="email" placeholder="E-mail"></input>
                <input type="password" placeholder="Senha"></input>
                <button type="submit" value="Entrar"></button>
            </Form>
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
    input{
        width: 330px;
        height: 58px;
        border: none;
        border-radius: 5px;
        padding: 16px;
        box-sizing: border-box;
    }
    input:focus{
        outline: none;
    }
    input::placeholder{
        color: #000000;
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
    }
    button{
        width: 330px;
        height: 46px;
        border: none;
        border-radius: 5px;
        background: #A328D6;
    }
`