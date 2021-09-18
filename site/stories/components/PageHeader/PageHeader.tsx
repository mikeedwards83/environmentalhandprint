import React, { useState } from "react";
import { Button, ButtonType } from "../../atoms/Button/Button";

import { faBars, faTimes, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PageHeader = (props: {
    logo: string,
    title: string,
}) => {

    const { logo, title } = props;

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleSideNavOpen = () => {
        setIsNavOpen(true);
    }

    const handleSideNavClose = () => {
        setIsNavOpen(false);
    }

    return (
        <div className="PageHeader">
            <nav className="navbar navbar-expand-lg  tt-fg-primary-dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} style={{ maxHeight: "50px" }} className="pr-2" alt={title} />
                </a>
                <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto  ">
                        <li className="nav-item pr-3 d-none d-lg-block">
                            {/*  <a href="https://app.myforest.earth/login?returnUrl=/sc/forest" className="btn tt-btn-primary-light ">
                            <i className="fa fa-trees"></i>  Login
                        </a>
                        <a href="https://app.myforest.earth/signup" className="btn tt-btn-primary-dark ">
                            <i className="fa fa-acorn"></i>  Join Now
                        </a>
    */}
                        </li>


                        <li className="nav-item text-center ">
                            <Button className="side-nav-toggler" title="Show/Hide Menu" type={ButtonType.Link} onClick={handleSideNavOpen} >
                                <FontAwesomeIcon icon={faBars} />
                                <span className="pl-2">Menu</span>
                            </Button>

                        </li>

                    </ul>

                </div>

                <div className=" d-flex d-lg-none" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto  ">
                        <li className="nav-item text-center ">
                            <Button className="side-nav-toggler" data-target="sideNav" title="Show/Hide Menu" type={ButtonType.Link}>
                                <FontAwesomeIcon icon={faBars} />
                                <span className="pl-2">Menu</span>
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav id="sideNav" className={`side-nav ${isNavOpen ? "" : "collapsed"}`}>
                <div className="side-nav-container">
                    <div className="text-right">

                        <Button className="side-nav-toggler" title="Hide Menu" type={ButtonType.Link} onClick={handleSideNavClose} >
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/blogs">
                                <FontAwesomeIcon icon={faTree} />
                                Blog
                            </a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/guides">
                                <FontAwesomeIcon icon={faTree} />
                                Guides
                            </a>
                        </li>
                        <hr />
                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/subscription">
                                <i className="fad fa-calendar-star"></i>
                                Subscriptions
                            </a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/business">
                                <i className="fad fa-briefcase"></i>
                                For Business
                            </a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/offset">
                                <i className="fas fa-plane"></i>
                                Single Offsets
                            </a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/donate">
                                <i className="fad fa-hands-heart"></i>
                                Support Charities
                            </a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/gift">
                                <i className="fad fa-gifts"></i>
                                Green Gifts
                            </a>
                        </li>
                        <hr />

                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/handprint">
                                <i className="fad fa-hand-heart"></i>
                                Your Handprint
                            </a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/blog">
                                <i className="fad fa-megaphone"></i>
                                Blog
                            </a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/yourforest">
                                <i className="fad fa-trees "> </i>
                                What is My Forest?
                            </a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="nav-link" href="/about">
                                <i className="fad fa-portrait"></i>
                                About
                            </a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="nav-link" href="https://app.myforest.earth/pages/reports">
                                <i className="fas fa-file-chart-line"></i>
                                Our Reports
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="text-center">

                        <a className="tt-btn-primary-light btn " href="https://app.myforest.earth/install">
                            &nbsp;
                            <i className="fas fa-mobile-android-alt "></i> Download The App&nbsp;
                        </a>
                    </div>
                    <hr />
                    <div className="text-center">
                        <a className="" href="/">
                            <img src="~/Images/Logo.svg" style={{ maxHeight: "50px" }} alt="MyForest" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )

}