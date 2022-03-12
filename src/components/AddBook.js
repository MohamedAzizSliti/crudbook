import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { addbook } from '../Service/bookservice';

function AddBook(props) {
  
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [category,setCategory]=useState('');
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }

       return result;
    }
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
    <input placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
    <input placeholder='Author'onChange={(e)=>setAuthor(e.target.value)}/>
    <input placeholder='Categorie' onChange={(e)=>setCategory(e.target.value)}/>
    <Button 
    onClick={()=>{
      addbook({id:makeid(5),title:title,author:author,category:category},props.books,props.setbooks);
      props.setshow(false)}}>Add Book</Button>
    </div>
  )
}

export default AddBook