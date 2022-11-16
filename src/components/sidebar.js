import navIcon from '../styles/adminicon.png'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/sidebar.css'
import { Navigate } from 'react-router-dom';
const Sidebar = (props) => {
    let navigate= useNavigate()
    let handleClick = ()=>{
        navigate('/')
    }
    return ( 
        <div className="sidebar">
            <div className="user">
                <div className="image">
                    <img src={navIcon} alt="" />
                </div>
                <div className="username">
                <p>Admin {props.data}</p>
                    
                    </div>


            </div>

            <div className="menu">
                
                <Link to="/admin-portal" className="link" >Home</Link>
                <Link to="/admin-portal/book-list" className="link">Book List</Link>
                <Link to="/admin-portal/user-list" className="link">User List</Link>
                <Link to="/admin-portal/add-books" className="link">Add Book</Link>
                <Link to="/admin-portal/add-users" className="link">Add User</Link>

                
               
            </div>
            <div className='logout1'> <button  onClick={handleClick}>Logout</button></div>
        </div>
     );
}
 
export default Sidebar;

