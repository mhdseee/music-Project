
import "./App.css"
import {Link, Outlet} from 'react-router-dom';
const App = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" 
                    to='/Musics'>Playlist</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/About'>About Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/Contact'>Contact Us</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
    </>
  )
}

export default App
