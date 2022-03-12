import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Update } from '../Service/bookservice';


function UpdateBook(props) {
  useEffect(() => {

  });
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [category,setCategory]=useState('');
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
       <input   onChange={(e)=>setTitle(e.target.value)}/>
        <input onChange={(e)=>setAuthor(e.target.value)}/>
        <input onChange={(e)=>setCategory(e.target.value)}/>
<Button onClick={()=>{Update({id:props.id,title:title,author:author,category:category},props.books,props.setBooks,props.id);props.setshow(false)}}>Edit Book</Button>
    
    
    </div>
  )
}

export default UpdateBook