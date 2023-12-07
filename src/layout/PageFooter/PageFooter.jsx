import logo from '../../assets/logo-white.png'
import './PageFooter.css'

export function PageFooter() {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="row align-items-center ">
          <div className="col-6">
            <p className="disclaimer">
              Moira club is a combination of 4 services: Moira Play, Moira
              Learn, Moira Enjoy, Moira Fitness, carrier can choose between
              these four services and its available in several languages: EN,
              AR, ES. We ve updated Moira service with premium branded and
              licensed content from Marvel, DC, Disney and so on. The user would
              only pay subscription price for unlimited use of this content.
            </p>
          </div>
          <div className="col-3">
            <ul>
              <li>Support</li>
              <li>Terms </li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="col-3">
            <p>Phone</p>
            <p>+21 8139958</p>
            <p>Email</p>
            <p>support@moira.club</p>
            <ul>
              <li>Facebook</li>
              <li>Twitter </li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
