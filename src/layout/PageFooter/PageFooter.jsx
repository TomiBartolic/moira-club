import { Link } from 'react-router-dom'

import logo from '../../assets/vertical-moira-logo-white.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linked-in.svg'
import youtube from '../../assets/youtube.svg'
import './PageFooter.css'

export function PageFooter() {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-2 footer-logo">
            <img src={logo} alt="moira logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12">
            <p className="text-justify disclaimer">
              Moira club is a combination of 4 services: Moira Play, Moira
              Learn, Moira Enjoy, Moira Fitness, carrier can choose between
              these four services and its available in several languages: EN,
              AR, ES. We ve updated Moira service with premium branded and
              licensed content from Marvel, DC, Disney and so on. The user would
              only pay subscription price for unlimited use of this content.
            </p>
          </div>

          <div className="col-lg-3 offset-lg-2 col-6">
            <ul>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-6 text-end">
            <p>Phone</p>
            <h6>+21 8139958</h6>
            <p>Email</p>
            <h6>support@moira.club</h6>
            <ul className="social">
              <li>
                <img src={facebook} alt="facebook logo" />
              </li>
              <li>
                <img src={instagram} alt="instagram logo" />
              </li>
              <li>
                <img src={linkedin} alt="linkedin logo" />
              </li>
              <li>
                <img src={youtube} alt="youtube logo" />
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-5">
            <p>All rights reserved, © Moira.club 2023</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
