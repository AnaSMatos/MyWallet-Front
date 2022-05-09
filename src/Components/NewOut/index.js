import{Link, useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"

export default function NewIn({token}){
    
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("")
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        const info = {
            value,
            description,
            type: "out"
        }

        const config = {
            headers: {
                Authorization : `Bearer ${token}`
            }
        }

        setValue(0);
        setDescription("")

        const promise = axios.post("http://localhost:5000/transactions", info, config);
        promise.then(response => {
            console.log(response.status)
        })
        promise.catch(err => {
            console.log(err.response.data)
        })

    }
    return(
        <Container>
            <Top>
                <h1>Nova saída</h1>
            </Top>
            <Form onSubmit={handleSubmit}>
                <input type="number" min="1" step="any" required placeholder="Valor"
                value={value} onChange={(e)=> setValue(e.target.value)}/>
                <input type="text" maxLength="25" required placeholder="Descrição"
                value={description} onChange={(e)=> setDescription(e.target.value)}/>
                <button><p>Salvar saída</p></button>
            </Form>
            <StLink to="/main">
                Voltar
            </StLink>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 20px;
    font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 19px;
    margin-top: 30px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    height: 7%;
    h1{
        color: #FFFFFF;
        font-size: 25px;
        font-weight: 500;
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
    margin-top: 30px;
    input{
        width: 100%;
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
        width: 100%;
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