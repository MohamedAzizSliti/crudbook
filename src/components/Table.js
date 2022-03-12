import React, { useEffect, useState } from 'react'
import { deletebook } from '../Service/bookservice'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from 'react-bootstrap';


function Table(props) {





  return (
    <div>
        
<MDBTable hover>
<MDBTableHead>
<tr><th>title</th>
<th>author</th>
<th>category</th>
<th>edit</th>
<th>delete</th></tr>
</MDBTableHead>
      <MDBTableBody>
{props.books.map((el)=><tr>
<td>{el.title}</td> 
<td>{el.author}</td> 
<td>{el.category}</td> 
<td> <Button  onClick={()=>{props.setid(el.id);props.setshow(true)}}>Update</Button> </td>
<td> <Button  onClick={()=>deletebook(props.books,props.setBooks,el.id)}>Delete</Button> </td>
</tr>)}
</MDBTableBody>
</MDBTable >


    </div>
  )
}

export default Table