import logo from '../../assets/logo-white.png'
import './PageHeader.css'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

export function PageHeader() {
  return (
    <nav className="nav container align-items-center justify-content-between  d-flex navigation py-2">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="d-flex align-items-center justify-content-center gap-5">
        <li>
          <Link to="/play">Play</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/enjoy">Enjoy</Link>
        </li>
        <li>
          <Link to="/fitness">Fitness</Link>
        </li>
      </ul>
      <div className="menu">
        <Menu />
      </div>
    </nav>
  )
}
