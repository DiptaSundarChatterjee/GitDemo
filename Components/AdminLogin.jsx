import { useState } from 'react';
import '../Styles/AdminLogin.css'
import { Link} from "react-router-dom";



const AdminLogin = () => {
    let[uname,setuname] = useState("");
    console.log(uname);
    let[password,setpassword] = useState("");
    console.log(password);

    let adminLogin = () =>{
        if(uname == "abcd" && password == 1234){
            alert("Login Is Successful")
        }
        else{
            alert("Invalid Credentials")
        }
    }






    return (
        <div className="adminlogin">
            <form action="">
                <label htmlFor="">
                    UserName: {" "} <input value={uname} onChange={(e)=> {setuname(e.target.value);}} type="text" placeholder="Enter the UserName" />
                </label>
                <br />
                
                <label htmlFor="">
                    Password: <input value={password} onChange={(e)=> {setpassword(e.target.value);}} type="password" placeholder="Enter the password" />
                </label>
                <br />
                
                <button onClick={adminLogin} >Login</button>
                <br /> <br />
                <span>Arey you the New User? <Link to= '/adminsignup'>Register</Link> </span>
            </form>
        </div>
    );
}

export default AdminLogin;