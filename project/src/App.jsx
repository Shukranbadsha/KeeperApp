
import React,{ useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Add from "./Add";
import Note from "./note";
  


function App(){

    const[datas,setDatas]=useState([])

   function passednote(newdata){  //this function is passed through proops over Add component
      setDatas((prevData)=>{      //from parent to child always child is giving data to parent
        return [...prevData,newdata]
        
      })
   }
function deleteNote(id){
setDatas((prevData)=>{
    return prevData.filter((dataItems,index)=>{
 return index !== id;
    })
})
}
    return(
    <div className="container">
    <Header />
     <Add  addnote={passednote} />   
    {datas.map((dataItems,index)=>{                         //this map function is looping thrugh whole datas and taking dataitems and returning <note/>
    return <Note title={dataItems.title}                    //title and content is passed through prrops from parent to child 
    content={dataItems.content } 
     Adddelete={deleteNote} 
     id={index}
     key={index}

    />
   })}
     <Footer />
</div>
 );
  

}

export default App;
