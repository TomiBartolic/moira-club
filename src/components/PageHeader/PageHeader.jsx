import logo from '../../assets/logo-white.png'
import './PageHeader.css'


export function PageHeader () {
    return <div className='d-flex justify-content-center navigation'>
    <a href="/">
        <img src={logo} alt="" />
    </a>
    </div>
}

