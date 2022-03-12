import React, { useState } from 'react'
import AddBook from '../components/AddBook'
import UpdateBook from '../components/UpdateBook'
import Table from '../components/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function Book() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);



const [books,setBooks]=useState([{id:1,title:"poor dad rich dad",author:"Robert Kiyosaki, Sharon Lechter",category:"drama"},{id:2,title:"Think and Grow Rich",author:"Napoleon Hill",category:"action"}])
const [id,setid]=useState(null);
return (
  <div style={{display:'flex',gap:20}}>
  <div >
      <Button onClick={()=>{setShow(true);console.log(show)}}>Add Book</Button>
      <Table setshow={setShow1} setid={setid} books={books} setBooks={setBooks}/></div>
      <Modal show={show} onHide={()=>setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>ADD BOOK</Modal.Title>
      </Modal.Header>
      <Modal.Body><AddBook books={books} setbooks={setBooks} setshow={setShow1} /></Modal.Body>
     
    </Modal>
    <Modal show={show1} onHide={()=>setShow1(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Update Book</Modal.Title>
      </Modal.Header>
      <Modal.Body><UpdateBook setshow={setShow1} books={books} setbooks={setBooks} id={id}/>
</Modal.Body>
      
    </Modal>
  </div>
)
}


export default Book