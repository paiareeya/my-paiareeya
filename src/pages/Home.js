import { Component } from "react";
import './Home.css'

class Home extends Component {
    render() {
        return (
            // <form>
            <div className="Form-Home">
                <div className="container-fluid">
                    <div className="row row-cols-1">

                        <div className="col padding-0" >
                            <div className="form-main">
                                <img className="front" src="https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <div className="form-label">
                                    <h2>I'm Pai Areeya</h2><br />
                                    <div className="btn-front">
                                        <button className="btn-Hire">Hire Me Now</button>
                                    </div>
                                </div>

                                <img className="background" src="https://i.pinimg.com/564x/53/98/9d/53989d04a08a3bfaf8d7bd169a0740c3.jpg" />
                                <div className="back-label">
                                    <div className="row row-cols-3">
                                        <div className="col">
                                            <div className="back-aboutMe">
                                                <h4>I am Designer,</h4>
                                                <h4>Front-end developer.</h4>
                                                <div className="btn-back">
                                                    <button className="btn-Projects">All Projects</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="back-image">
                                                <img className="back-image" src="https://images.pexels.com/photos/6203794/pexels-photo-6203794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="back-label-detail">
                                                <label className="label-detail">Address: <p>Khon Kaen</p></label>
                                                <label className="label-detail">Email: <p>Aareeya90@gmail.com</p></label>
                                                <label className="label-detail">Phone: <p>+664 690 2961</p></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="from-cards">
                                <div className="label-on">
                                    <label className="label-on-label">Services What</label>
                                    <label className="label-on-label">I Can Offer for You</label>
                                    <div className="label-on-All-p">
                                        <p className="label-on-p">These are words live by in everyting we do. Every story we tell,</p>
                                        <p className="label-on-p"> every brand we build, and every interaction we create must not only look beautiful.</p>
                                    </div>
                                </div>
                                <div className="grid-card">
                                    <div className="row row-cols-1 row-cols-md-1 g-4">
                                        <div className="col">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">Front-end developer</h5>
                                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">Web Designing</h5>
                                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            // </form>
        )
    }
}

export default Home