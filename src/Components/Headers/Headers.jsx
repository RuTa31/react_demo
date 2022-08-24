import './Headers.css'
import { Link } from 'react-router-dom';
const Header = ()=> {
    return (
        <header>
            <div className='head_container header_all'>
                <nav className='header_all'>
                    <div className='logo'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Disney_cinema_logo.png/1200px-Disney_cinema_logo.png" alt="logo" />
                    </div>
                    <ul className='url_name'>
                    <Link to="/">Home</Link>
                    <Link to="/introduction">introduction</Link>
                    <Link to="/order">order</Link>
                    <Link to="/room">room</Link>
                    </ul>
                </nav>
                
            </div>
        </header>
    )
}
export default Header;