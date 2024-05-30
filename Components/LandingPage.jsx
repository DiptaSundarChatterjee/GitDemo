import { Link } from 'react-router-dom'
import "../Styles/LandingPage.css"

const LandingPage = () => {
    return (
        <div className="landingpage">
            <h1>Loading Page</h1>
            <div className="landpage_sub">
                <Link to="/userlogin">
                    <img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" alt="" />
                    <h3>User Login</h3>
                </Link>
                <Link to="/adminlogin">
                    <img src="https://cap-cetcell.in/ay2022/images/admin%20banner.png" alt="" />
                    <h3>Admin Login</h3>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;