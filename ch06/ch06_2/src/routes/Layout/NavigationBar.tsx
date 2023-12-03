// import { Link } from "react-router-dom"
import {Link} from '../../components'

export default function NavigationBar() {
  return (
    <div className="flex p-2 navbar bg-base-100">
      <Link to='/' className='btn btn-link'>Home</Link>
      <Link to='/board' className="ml-4 btn btn-link">Board</Link>
    </div>
  )
}
