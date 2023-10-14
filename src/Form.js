import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Form = () => {
    const [amount,setAmount] = useState('')
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const dispatch = useDispatch()
  return (
    <div className='container'>
            <h2 className='text-secondary'>User Inputs</h2>
            <div className='row'>
                <div className='col-8 flex'>
                <input 
                    type="number"
                    value={amount}
                    placeholder='Enter Amount' 
                    className='w-50'
                    onChange={(e)=>{setAmount(e.target.value)}}
                    />
                    <button className='btn btn-success mx-2'
                    onClick={(e)=>{
                        dispatch({type:"Deposit",payload:amount})
                        setAmount("")
                    }}
                    >Deposit</button>
                    <button className='btn btn-danger mx-2'
                    onClick={(e)=>{
                        dispatch({type:"Withdraw",payload:amount})
                        setAmount("")
                    }}
                    >Withdraw</button>
                </div>

            </div>
            <div className='row'>
                <div className='col-8'>
                <input 
                    type="text"
                    value={name}
                    placeholder='Enter Your Name' 
                    className='w-50'
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                    <button className='btn btn-success mx-2'
                    onClick={(e)=>{
                        dispatch({type:"nameUpdate",payload:name})
                        setName("")
                    }}
                    >Update</button>
                </div>

            </div>
            <div className='row'>
                <div className='col-8'>
                <input 
                    type="text"
                    value={number}
                    placeholder='Enter Mobile Number' 
                    className='w-50'
                    onChange={(e)=>{setNumber(e.target.value)}}
                    />
                    <button className='btn btn-success mx-2'
                    onClick={(e)=>{
                        dispatch({type:"mobileUpdate",payload:number})
                        setNumber("")
                    }}
                    >Update</button>
                </div>

            </div>
    </div>
  )
}

export default Form