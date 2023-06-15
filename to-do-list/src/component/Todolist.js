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
        <button onClick={addActivity}>Add</button>
      </div>
    </React.Fragment>
  );
}
