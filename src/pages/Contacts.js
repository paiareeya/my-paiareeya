import { Component } from "react";
import './Contacts.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBusinessTime } from "@fortawesome/free-solid-svg-icons";

class Contacts extends Component {
    render() {
        return (
            <div className="from-contacts">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="contacts-us">
                                <h1>Contact Us</h1>
                                <div className="contacts-label">
                                    <label>feel free to contact us any time.</label>
                                    <label>we will get back to you as soon as we can!</label>
                                    <form className="from-contacts-input">
                                        <p>
                                            <label>Name</label>
                                            <input className="w3-input" type="text" /></p>
                                        <p>
                                            <label>Email</label>
                                            <input className="w3-input" type="text" /></p>
                                        <p>
                                            <label>Massage</label>
                                            <input className="w3-input" type="text" /></p>
                                    </form>
                                    <div className="from-btn-send">
                                        <button type="button" className="btn btn-dark btn-send">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="contacts-info">
                                <div className="card-info">
                                    <h1>Info</h1>
                                    <div className="container-info">
                                        <div className="row row-cols-1">
                                            <div className="col">
                                                <div className="info-email">
                                                    <FontAwesomeIcon className="icon-faEnvelope" icon={faEnvelope}></FontAwesomeIcon>
                                                    <label>Aareeya90@gmail.com</label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="info-phone">
                                                    <FontAwesomeIcon className="icon-faPhone" icon={faPhone}></FontAwesomeIcon>
                                                    <label>+664 690 2961</label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="info-time">
                                                    <FontAwesomeIcon className="icon-faTime" icon={faBusinessTime}></FontAwesomeIcon>
                                                    <label>09:00 - 18:00</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts;