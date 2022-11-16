import Sidebar from "./sidebar";
import "../styles/booklist.css";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BookList = (props) => {
  let location = useLocation
  let email = props.data;

  let [book, setBooks] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("  http://localhost:2000/books");
      let resData = await response.json();
      setBooks(resData);

    };
    fetchData();
  },[book]);

  console.log(location);

    let handleDelete= (id)=>{
        fetch(` http://localhost:2000/books/${id}`,{
          method:'DELETE',
          headers:{'Content-type':'appliaction/json'},
          body: JSON.stringify(book)
        })
        window.location.reload()
    }
    
   let handleRemove = (id)=>{
    setBooks(book.filter(item=>item.id!=id))

   }
  
  return (
    <div className="booklist">
     
      <div className="right">
        <div className="title">
          <h1 className="heading">Book List</h1>
        </div>
        {book.map((books) => 
           (<div className="list">
           <div className="list-item">
            <h2>{books.id}.{books.title}</h2>
            <p>{books.author}</p>
            { location.pathname == '/admin-portal/book-list' &&  <button onClick={()=>handleDelete(books.id)}>Delete</button> }
            { location.pathname == '/user-portal/book-list' &&  <button onClick={()=>handleRemove(books.id)}>Not Intrested</button> }

           
            </div>
          </div>
           )
        )}
      </div>
    </div>
  );
};

export default BookList;
