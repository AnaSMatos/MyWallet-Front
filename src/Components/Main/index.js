import{Link, useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"

import ImgSair from "./../../Assets/sair.png"
import ImgPlus from "./../../Assets/+.png"
import ImgMinus from "./../../Assets/-.png"

export default function Main({setToken, token, userData, setUserData}){

    const [total, setTotal] = useState(0)
    const navigate = useNavigate();
    useEffect(() => {  
        const config = {
            headers: {
                Authorization : `Bearer ${token}`
            }
        }
        const promise = axios.get("http://localhost:5000/main", config)
        promise.then(response => {
            setUserData(response.data);
            let count = 0;
            for(let item of response.data){
                if(item.type === "in"){
                    count += Number(item.value);
                }else{
                    count -= Number(item.value);
                }
            }
            setTotal(count)
        })
        promise.catch(err =>{
            alert(err.response.data)
        })
    }, [])

    return (
        <Container>
            <Top>
                <h1>Olá</h1>
                <button onClick={()=>{
                    setToken("")
                    navigate("/")}}><img src={ImgSair}/></button>
            </Top>
            <Content>
                <Infos>
                    {userData.map((item, id) => {
                        return(
                            <Info key={id}>
                                <div className="date">{item.date}</div>
                                <div className="description">{item.description}</div>
                                <div className={`value ${item.type === "in" ? "in" : " out"}`}>{item.value % 1 === 0 ? `${parseInt(item.value)},00` : parseFloat(item.value).toFixed(2)}</div>
                            </Info>
                        )
                    }
                    )}
                </Infos>
                <Total>
                    <p className="saldo">SALDO</p>
                    <p className={`value ${total >= 0 ? "in" : "out"}`}>{total.toFixed(2)}</p>
                </Total>
            </Content>
            <Options>
                <New onClick={()=>{navigate("/new-in")}}>
                    <img src={ImgPlus}></img>
                    <p>Nova<br></br>Entrada</p>
                </New>
                <New onClick={()=>{navigate("/new-out")}}>
                    <img src={ImgMinus}></img>
                    <p>Nova<br></br>Saída</p>
                </New>
            </Options>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 20px;
    font-family: 'Raleway', sans-serif;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7%;
    h1{
        color: #FFFFFF;
        font-size: 25px;
        font-weight: 500;
    }
    button{
        background: none;
        border: none;
    }
`
const Info = styled.div`
    display: flex;
    position: relative;
    font-size: 17px;
    .date{
        color: #C6C6C6;
        margin-right: 10px;
    }
    .description{
        color: #000;
        font-weight: 500;
    }
    .value{
        font-weight: 500;
        position: absolute;
        right: 0;
    }
    .in{
        color: #03AC00;
    }
    .out{
        color: #C70000;
    }
`

const Content = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    height: 75%;
    position: relative;
    padding: 23px 12px;
    box-sizing: border-box;
`
const Infos = styled.div`
    overflow-y: scroll;
    height: 92%;
`
const Total = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    bottom: 0;
    right: 0;
    left: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 17px;
    .in{
        color: #03AC00;
    }
    .out{
        color: #C70000;
    }
    
    .saldo{
        font-weight: bold;
    }
    .value{
        font-weight: 500;
    }
`
const Options = styled.div`
    display: flex;
    width: 100%;
    height: 15%;
    justify-content: space-between;
    margin-top: 3%;
`
const New = styled.button`
    width: 47%;
    height: 100%;
    background: #A328D6;
    border: none;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    p{
        color: #FFFFFF;
        font-size: 17px;
        font-weight: 700;
    }
`