import React, { useState } from "react";

export default function Todolist() {
  const [activity, setActivity] = useState("");
  const [datalist,setdatalist] = useState([]);

  function addActivity(){
         
          setdatalist((datalist)=>{
            const newlist = [...datalist,activity]
            console.log(newlist);
            setActivity('');
            return newlist;
          })
  }

  
  function removetask(i){
    const updateddatalist = datalist.filter((elem,id)=>{return i!==id;})
     
    setdatalist(updateddatalist);
  }
  
  
  function TaskCompleted(i){
    const updateddatalist = datalist.filter((elem,id)=>{return i!==id;})
    
    setdatalist(updateddatalist);
  } 

  function removeAll (){
    setdatalist([]);
    alert("Remove all Task?");
  }

  return (
    <React.Fragment>
      <div className="box">
        <div className="Header">Todolist</div>
        <input
          type="text"
          placeholder="Add the task"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className="Addbutton" onClick={addActivity}>Add</button>
        { datalist.length>=1 && <p className="main-heading">Today's Task</p> }
        {datalist!==[] && datalist.map((data,i)=>{
          return(
            <React.Fragment>
              <p key={i}>
              <div className="datalist">{data}</div>
              <div>
                <button className="List-Button" onClick={()=>removetask(i)}>Remove(-)</button>  
                <button className="List-Button" onClick={() => {
  TaskCompleted(i);
  
}}>Task completed: &#10004;</button> 
              </div>
              </p>
            </React.Fragment>
          )
        })}

        { datalist.length>=1 &&  <button className="Removeall" onClick={removeAll}>Remove All</button>}
       
      </div>
    </React.Fragment>
  );
}
