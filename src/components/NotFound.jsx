import "../App.css"
import { NavLink } from "react-router-dom"
const NotFound = () => {
  return (
    <div className="text-center">
        <div className="bg" id="not-found"></div>
        <NavLink to='/' className='btn btn-primary'>Back to home page</NavLink>
    </div>
  )
}

export default NotFound