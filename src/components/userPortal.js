

import { Route, Routes } from "react-router-dom";
import Sidebar1 from "./sidebar1";
import'../styles/userportal.css'
import AdminHome from "./adminhome";
import BookList from "./bookList";
import UserList from "./userLists";
import AddBooks from "./addBooks";
import UserHome from "./userhome";

import AddUsers from "./addUsers";

const UserPortal = (props) => {
    let email1 = props.data
  return (
    <div className="userportal">
      <div className="left">
      <Sidebar1 data={email1} />
      </div>
      <div className="right">
      <Routes>
        <Route path="/" element={<UserHome/>}/>
        <Route path="/book-list" element={<BookList/>}/>
        

      </Routes>

      </div>
     
      </div>
     
      
     
  );
};

export default UserPortal;
