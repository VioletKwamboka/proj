import React from 'react'
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import Popper from 'popper.js';

class  App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            aspiration: "",
            list: ["here", "there"]
        }
    }
    getAspiration = (event) => {
        this.setState({aspiration: event.target.value})
    }
    addNewAspiration = (event) => {
        let asp = this.state.list;
        asp.forEach(this.myFunction);
        this.setState({list: this.state.list.concat(event.target.value)})
    }
    myFunction = (item) => {
        document.getElementById("tad").innerHTML = item
    }

    addAspiration = (state) => {
        this.setState(state => {
            const asp = state.list.concat(state.value);
            return {
                aspiration: "",
                asp
            }
        })
    }

    render() {
        return (
            <div data-spy="scroll" data-target=".navbar" data-offset="50">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{opacity:".9"}}>
                    <div className="navbar-brand">
                        <div className="row">
                            <h3 style={{paddingLeft: "70px", color: "white"}}>Vio</h3>
                            <h3 style={{paddingLeft: "1px", color: "yellow"}}>let</h3>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ml-auto mt-2 justify-content-end" style={{paddingRight:"130px"}}>
                            <li className="nav-item active">
                                <a className="nav-link page" style={{color: "white",marginRight: "10px", fontSize: "16px"}}
                                   href="bootwithstrap.html">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{color: "white", marginRight: "10px", fontSize: "16px"}}
                                   href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{color: "white", marginRight: "10", fontSize: "16px"}}
                                   href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid bg-dark" style={{height: "700px", opacity: ".9"}}>
                    <div className="column text-center">
                        <div className="text-center" style={{paddingTop: "130px"}}>
                            <img src="imgp.jpg" style={{height: "150px", width: "150px", marginTop: "100px"}}
                                 className="rounded-circle my-auto"/>
                        </div>
                        <h1 className="text-center" style={{color: "white", paddingTop: "20px"}}>Hello!! <h2
                            style={{color: "yellow"}}>I'M Violet</h2></h1>
                        <div className="text-center justify-content-center">
                            <h2 className="text-center mx-auto"
                                style={{color: "gray", paddingTop: "20px", fontSize: "18px", width: "700px"}}>I am a
                                design-oriented front-end developer and I strive to build immersive and beautiful web
                                applications through carefully crafted code and user-centric design.</h2>
                        </div>
                        <div className="row d-flex justify-content-center" style={{paddingTop: "20px"}}>
                            <a href=""><i className="fa fa-facebook" aria-hidden="true"
                                          style={{paddingRight: "20px", color: "yellow"}}></i></a>
                            <a href=""><i className="fa fa-twitter" aria-hidden="true"
                                          style={{paddingRight: "20px", color: "yellow"}}></i></a>

                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{backgroundColor:"white", paddingTop: "30px", paddingBottom:"30px"}}
                     id="blog">
                    <div className="column">
                        <h2 className="text-center" style={{color: "black"}}>Blog</h2>
                        <div className="row" style={{marginTop:"20px", marginLeft:"30px"}}>
                            <div className="col-md-4">
                                <div className="column text-center">
                                    <h3 className="text-center">My Goals</h3>
                                    <div id="accordion" style={{paddingTop:"20px"}}>
                                        <div className="card">
                                            <div className="card-header">
                                                <a className="card-link" data-toggle="collapse" href="#collapse-one">
                                                    Goal One
                                                </a>
                                            </div>
                                            <div id="collapse-one" className="collapse show" data-parent="#accordion">
                                                <div className="card-body">
                                                    To be the best Web Developer
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a className="collapsed card-link" data-toggle="collapse"
                                                   href="#collapsetwo">
                                                    Goal Two
                                                </a>
                                            </div>
                                            <div id="collapsetwo" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    Build scalable web applications using React
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a className="collapsed card-link" data-toggle="collapse"
                                                   href="#collapse-three">
                                                    Goal Three
                                                </a>
                                            </div>
                                            <div id="collapse-three" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    Improve my javascript skills
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="column">
                                    <h3 className="text-center">My Aspirations</h3>
                                    <div className="table-responsive-sm" style={{paddingTop:"20px", marginRight:"30px"}}>
                                        <table className="table table-dark">
                                            <tr>
                                                <th>Number</th>
                                                <th>Aspiration</th>
                                            </tr>
                                            <tr>
                                                <td>0</td>
                                                <td id="tad"></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="row" style={{paddingLeft:"15px", paddingRight:"45px"}}>
                                        <button className="btn btn-primary" data-toggle="modal" data-target="#add">Add
                                        </button>
                                        <button className="btn btn-danger ml-auto" data-toggle="modal"
                                                data-target="#delete">Delete
                                        </button>

                                        <div className="modal fade" id="add">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">
                                                            Add New Aspiration
                                                        </h4>
                                                        <button type="button" className="close"
                                                                data-dismiss="modal">&times;</button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="form-group">
                                                            <label htmlFor="usr">Enter Aspiration</label>
                                                            <input type="text" className="form-control" id="usr"/>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button className="btn btn-primary" type="button"
                                                                data-dismiss="modal">Add
                                                        </button>
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

                <div className="container-fluid" style={{height: "auto"}} id="contact">
                    <div className="column">
                        <h3 className="text-center" style={{color: "white", marginTop: "30px", marginBottom: "30px"}}>
                            Contact
                        </h3>
                        <div className="container"
                             style={{backgroundColor: "white", paddingTop: "30px", paddingBottom: "30px", marginBottom: "30px", paddingLeft:"30px", paddingRight:"30px"}}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter Email"/>
                                <textarea className="form-control" style={{marginTop: "30px"}}>Enter Text</textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-dark" style={{marginBottom:"-15px", height:"25px"}}>
                    <p className="text-center" style={{color: "white"}}>violet&copy;2020</p>
                </div>

            </div>
        )
    }

}

export default App;
