import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar";
import'../styles/adminportal.css'
import AdminHome from "./adminhome";
import BookList from "./bookList";
import UserList from "./userLists";
import AddBooks from "./addBooks";

import AddUsers from "./addUsers";

const AdminPortal = (props) => {
    let email = props.data
  return (
    <div className="adminportal">
      <div className="left">
      <Sidebar data={email} />
      </div>
      <div className="right">
      <Routes>
        <Route path="/" element={<AdminHome/>}/>
        <Route path="/book-list" element={<BookList/>}/>
        <Route path="/user-list" element={<UserList/>}/>
        <Route path="/add-users" element={<AddUsers/>}/>
        <Route path="/add-books" element={<AddBooks/>}/>

      </Routes>

      </div>
     
      </div>
     
      
     
  );
};

export default AdminPortal;
