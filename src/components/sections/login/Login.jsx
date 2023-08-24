import React from 'react'
import './index.scss'
import check from '../../../assets/check.png'
import arrow from '../../../assets/aroow.png'

const Login = () => {
  return (
    <section className='div'>
        <div className='icon'>
            <img src={check} alt="" />
            <img id='arrow' src={arrow} alt="" />
       
            <h1 className='confir'>acesso Confirmado</h1>
            <h1 className='name'><span>Romário Andrade</span></h1>
        </div>
    </section>
  )
}

export default Login