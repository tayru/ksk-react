import {Link} from "react-router-dom";

const Header = () => (
    <header className="header">
        <div className="header__container _container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'> <img className="logo-head" src="/static/img/logo-head.png" alt=""/> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto menu">
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'> О нас</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/services'>Услуги</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/portfolio'>Портфолио</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/trust'>Нам доверяют</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contacts'>Контакты</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tel:+79309153808">+7 (930) 915-38-08</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>


)

export default Header