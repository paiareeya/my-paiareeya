import { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFackb } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="row row-cols-3">
                    <div className="col">
                        <div className="form-logo">
                            <img className="logo" src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/298095624_4080376938853367_1506917741042582826_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BqP110ldMAEAX9HxN1S&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCYU1Adm54s8ro_2pcgStSEEsVhzoHopiznOvyvSposiQ&oe=63A09BB3" alt="" />
                            <h5>Pai Areeya</h5>
                        </div>
                    </div>
                    <div className="col">
                        <nav className="navbar">
                            <div className="row row-cols-3">
                                <div className="col">
                                    <div className="form-navbar">
                                        <NavLink to='/' className={({ isActive }) =>
                                            isActive ? 'link active' : 'link'
                                        }>Home</NavLink>
                                    </div>
                                </div>
                                {/* <div className="col">
                                    <div className="form-navbar">
                                        <NavLink to='/main' className={({ isActive }) =>
                                            isActive ? 'link active' : 'link'
                                        }>About</NavLink>
                                    </div>
                                </div> */}
                                <div className="col">
                                    <div className="form-navbar">
                                        <NavLink to='/contacts' className={({ isActive }) =>
                                            isActive ? 'link active' : 'link'
                                        }>Contacts</NavLink>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col">
                        <div class="container-icon">
                            <div class="row">
                                <div class="col ">
                                    <a href="https://www.facebook.com/ja.poppyk.otic">
                                        <img className="Facebook" src="https://img.icons8.com/ios-glyphs/512/facebook-new.png" />
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="https://www.instagram.com/_pai.ty/?next=%2F">
                                        <img className="Instagram" src="https://img.icons8.com/ios-glyphs/512/instagram-new.png" />
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="https://github.com/paiareeya">
                                        <img className="Github" src="https://img.icons8.com/ios-glyphs/512/github.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

        )
    }
}

export default Navbar;