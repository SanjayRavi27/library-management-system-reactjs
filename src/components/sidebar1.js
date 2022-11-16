import navIcon from '../styles/adminicon.png'
import { Link } from 'react-router-dom';
import '../styles/sidebar1.css'
import { useNavigate } from 'react-router-dom';

const Sidebar1 = (props) => {
    let navigate= useNavigate()
    let handleClick = ()=>{
        navigate('/')
    }
    return ( 
        <div className="sidebar1">
            <div className="user1">
                <div className="image1">
                    <img src={navIcon} alt="" />
                </div>
                <div className="username1">
                <p>User {props.data}</p>
                    
                    </div>


            </div>

            <div className="menu1">
                
                <Link to="/user-portal/user-home" className="link" >Home</Link>
                <Link to="/user-portal/book-list" className="link">Book List</Link>
                
               
                
               
            </div>
            <div className='logout1'> <button onClick={handleClick} >Logout</button></div>
           
        </div>
     );
}
 
export default Sidebar1;

