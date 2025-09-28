import React from 'react'

function Cal() {
  return (
    <>
    <b>Enter First Number:</b><input type="number" className='' name = "num1"/>
    <br/>
    <br/>
    <b>Enter Second Number:</b><input type="number" className=""  name = "num2"/>
    <br/>
    <b>Result:</b>{}
    <br/>

    <button className='btn btn-info m-2'>Add</button>
    <button className='btn btn-primary m-2'>Mul</button>
    <button className='btn btn-success'>Div</button>
    <button className='btn btn-danger m-2'>Clear</button>

    </>
  )
}

export default Cal
