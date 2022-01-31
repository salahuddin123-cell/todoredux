
import { useState } from 'react';
import './App.css';
import { useDispatch ,useSelector} from 'react-redux';

import {addTodo,deleteTodo,deleteAll} from './action/index'
function App() {
  const [background,setbackground]=useState(false);
  const [input, setinput] = useState("");
  const handleChange = (e) => {
    setinput(e.target.value);
};
const dispatch=useDispatch()
 const list=useSelector((state)=>state.todoReducers.list)
 

  return (
    <div className="container" style={{background:background?'black':'silver'}}>
       
    <h1>Todo List</h1>
  
    <div className="content"style={{background:background?'silver':'rgb(21, 139, 197)'}}>
   <i class="fas fa-lightbulb  fa-2x" style={{color:background?'yellow':'black'}} onClick={()=>setbackground(!background)}></i>
        <div className="up">
            <input
            id="inp"
                type="text"
                name="todo"
                value={input}
                autoComplete="off"
                onChange={handleChange}
            />

    
           <i  onClick={input!==''?()=>dispatch(addTodo(input),setinput('')):null} style={{color:"green"}} class="fas fa-plus fa-3x"></i>
            
        </div>
        <div className="low">
            {list.map((elem)=>{
            return ( 
            <p>{elem.data} <span> <i onClick={()=>dispatch(deleteTodo(elem.id))} style={{ color: "rgb(255, 0, 170)" }} class="fas fa-trash-alt fa-2x"></i></span></p>
              )
            })}
       <button style={{marginLeft:200}} onClick={()=>dispatch(deleteAll())} className='btn btn-warning btn-sm'>REMOVE_ALL</button> 
        </div>
    </div>
</div>

  );
}

export default App;
