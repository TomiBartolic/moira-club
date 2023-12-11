import logo from '../../assets/moira-logo-white.svg'
import icon_game from '../../assets/icon-game.svg'
import icon_learn from '../../assets/icon-learn.svg'
import icon_enjoy from '../../assets/icon-enjoy.svg'
import icon_train from '../../assets/icon-train.svg'
import './PageHeader.css'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

export function PageHeader() {
  return (
    <nav className="nav fixed-top align-items-center justify-content-center  d-flex navigation">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="main-nav">
        <li>
          <Link to="/play/action">
            <img src={icon_game} alt="icon game" />
            Play
          </Link>
        </li>
        <li>
          <Link to="/learn">
            <img src={icon_learn} alt="icon learn" />
            Learn
          </Link>
        </li>
        <li>
          <Link to="/enjoy">
            <img src={icon_enjoy} alt="icon enjoy" />
            Enjoy
          </Link>
        </li>
        <li>
          <Link to="/fitness">
            <img src={icon_train} alt="icon train" />
            Fitness
          </Link>
        </li>
      </ul>
      <div className="menu">
        <Menu />
      </div>
    </nav>
  )
}
