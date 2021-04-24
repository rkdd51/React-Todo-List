import React, {useState} from 'react'

const App = () => {

  const [inputList, setinputList] = useState('')

  const [Items, setItems] = useState([])

  const itemEvent =(event)=>{

    setinputList(event.target.value)
  }
  const listOfItems =()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });

    setinputList('');
  };

  const deleteItems =()=>{
    console.log('deleted');

    setItems((oldItems)=>{
      return oldItems.filter((arryElm, index)=>{
        ;
      });
    });
  };

  return (
    <>
    <div className="main_div">
      <div className="center_div">
      <br/>
    <h1>To-do list</h1>
    <br/>
    <input type="text" placeholder="Add your work"  onChange={itemEvent} value={inputList}/>
    <button onClick={listOfItems}>  + </button>

    <ol>
      {Items.map((itemval,index)=>{
        return (
          <>
          <div className='todo_style'>
          <li>{itemval}</li>
          <button className='removeButton' onClick={deleteItems} key={index} id={index}> -</button>
          </div> 
          </>
        );

      })}
    </ol>
      </div>
    </div>
      
    </>
  );
};

export default App






