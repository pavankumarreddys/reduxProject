import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const Account = () => {
    const data  = useSelector((state)=>{
        return state
    })
  return (
    <div className='container'>
        <div className='row'>
        <h2 className='text-primary'>Account Information</h2>
            <div className='col-12'>
                <table className='table table-bordered w-100'>
            <thead>
                <tr>
                    <th>Balance</th>
                    <th>UserName</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.balance}</td>
                    <td>{data.userName}</td>
                    <td>{data.mobile}</td>
                </tr>
            </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Account
