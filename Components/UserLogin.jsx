import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../Styles/UserLogin.css'

const UserLogin=()=>{
    let [uname, setuname] = useState("");
    let [password, setpassword] = useState("");
    let userlogin=()=>{
        if(uname=="abcd" && password==1234){
            alert("login is succesfull")
        }
        else{
            alert("invalid credentials")
        }
    }
    
 return (
    <div className="userlogin">
        <form action="">
                <label htmlFor="">
                    Username:<input value={uname} onChange={(e) =>{setuname(e.target.value); }} type="text" placeholder="Enter the username" />
                </label>
                <br /> <br />
                <label htmlFor="">
                    Password: <input value={password} onChange={(e) =>{setpassword(e.target.value)}} type="password" placeholder="Enter the password" />
                </label>
                <br /> <br />
                <button onClick={userlogin}>Login</button>
                <br /> <br />
                <span>Are you the new user? <Link to='/usersignup'>Register</Link> </span>
            </form>
    </div>
 );
}
export default UserLogin;