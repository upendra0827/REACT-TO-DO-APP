import React, { useEffect, useState } from 'react';
import App from './App'

const ToDOList = (props) => {

  const [complete, setComplete] = useState(false)
  const Done = event => {
    !complete ? setComplete(true) : setComplete(false)
  }

  const [edit, setEdit] = useState(false)

  const Edit = event => {
    !edit ? setEdit(true) : setEdit(false)
    let id_of_item = event.target.className
    localStorage.setItem(id_of_item, document.getElementById(id_of_item).innerText)
  }

  return (
    <div >

      <li style={{ textDecoration: complete ? 'line-through' : 'none' ,background: edit ? "pink" : 'none'}} id={props.ind} contentEditable={edit ? true : false}> {props.item} </li>
      <button className={props.ind} onClick={Done}>DONE</button>
      {edit ? <button className={props.ind} onClick={Edit}>SAVE</button> : <button className={props.ind} onClick={Edit}>EDIT</button>}
      
    </div>
  )
}

export default ToDOList
