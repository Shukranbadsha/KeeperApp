import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

function Add(proops){
const[data,setdata]=useState({
    title:"",
    content:"",
})

function Handler(event){
const{name,value}=event.target
setdata((prevValue)=>{
return{
    ...prevValue,[name]:value
}
})
}
function Passdata(event)
{
    proops.addnote(data)   //so now when ever we click add button this proop will be triger and the data 
    setdata({
        title:"",
        content:"",
    })
                          // will be passed  to the App component
event.preventDefault()

}

return(
    <div>
    <form className="form">
        <input  onChange={Handler} value={data.title} className="title" name="title" type="text" placeholder="Title" ></input><br/>
        <textarea  onChange={Handler}  value={data.content} className="content" name="content" placeholder="Content" rows="3" ></textarea>
         <button onClick={Passdata} className="button">
        <AddIcon/>
       </button>
    </form>

      
   
</div>
)
}
export default Add