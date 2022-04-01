
import React, { useEffect, useState } from 'react';
import './App.css';
import { ReactDOM } from 'react';
import ToDOList from './ToDOList';
let old_value
let count = 0


function App() {
  const [old_input, setInput] = useState('')

  const [complete, setComplete] = useState(false)

  const input_event = (event) => {

    setInput(event.target.value)
  }

  const [items, setItems] = useState([])

  const add_items = (event) => {
    const input_value = document.querySelector('.take_input').value

    if (input_value.trim() == '') {
      return 
    }
    setItems((old_items) => {
      let all_items = [...old_items, input_value]
      return all_items
    })
    document.querySelector('.take_input').value = ''
  }

  useEffect(() => {

    for (let i = 0; i < localStorage.length; i++) {

      setItems((old_items) => {
        let all_items = [...old_items, localStorage.getItem(localStorage.key(i))]
        return all_items
      })
    }
  }, [])


  // FUNCTION TO DELETE


  const Delete = (event) => {

    setItems((old_items) => {
      let all_items = [...old_items].filter((item, index) => index != event.target.className)
      { localStorage.clear() }

      return all_items
    })
  }

  return (
    <div className='main_div'>
      <div className='center_div'>
        <br></br>
        <h1>ToDo list</h1>
        <br></br>
        <input type='text' placeholder='add an item' className='take_input' onChange={input_event} />
        <button onClick={add_items} className='add_todo'> + </button>
        <ol className='ordered_list'>

          {items.map((each_item, index) => {
            localStorage.setItem(index, each_item)
            return (
              <div>
                <ToDOList item={each_item} ind={index}></ToDOList>
                <button className={index} onClick={Delete}>DELETE</button>
              </div>
            )
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
