export function addbook(book,books,setBooks) {
    console.log(book);
    console.log(books);
setBooks([...books,book]);

}

export function deletebook(books,setBooks,id){

    setBooks(books.filter(book => book.id !== id))
}


export function Update(newbook,books,setBooks,id){
   var myArray=books;
  var objId = myArray.findIndex((obj => obj.id === id));

    //Log object to Console.
    
    //Update object's name property.
    myArray[objId]= newbook;
    setBooks([...myArray]);
    console.log(books)
    
    
}