import React, { useState } from "react";
import { Button, ButtonType } from "../../atoms/Button/Button";

import { faBars, faHandPaper, faTimes, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ILink } from "../../../ui/interfaces/ILink";
import { Image } from "../../atoms/Image/Image";
import { ScreenSize } from "../../../hooks/useBootstrapSize";

export const PageHeader = (props: {
    logo: string,
    title: string,
    links1: ILink[]
    links2?: ILink[]
}) => {

    const { logo, title, links1, links2 } = props;

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleSideNavOpen = () => {
        setIsNavOpen(true);
    }

    const handleSideNavClose = () => {
        setIsNavOpen(false);
    }



    return (
        <div className="PageHeader">
            <nav className="navbar navbar-expand-lg">
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
                            <Button className="side-nav-toggler" data-target="sideNav" title="Show/Hide Menu" type={ButtonType.Link} onClick={handleSideNavOpen} >
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


                        {links1.map(link =>
                            <li className="nav-item pr-3" key={link.url}>

                                <a className="nav-link" href={link.url} >
                                    {link.icon && <FontAwesomeIcon icon={link.icon} />}
                                    {link.text}
                                </a>
                            </li>
                        )}

                        {links2 && <>
                            <hr />

                            {links2.map(link =>

                                <li className="nav-item pr-3" key={link.url}>

                                    <a className="nav-link" href={link.url} >
                                        {link.icon && <FontAwesomeIcon icon={link.icon} />}
                                        {link.text}
                                    </a>
                                </li>
                            )}
                        </>
                        }

                    </ul>
                    <hr />
                    <div className="text-center">
                        <a className="" href="/">
                            <Image src="/images/logo-horizontal.svg" imageScales={
                                [
                                    { size: ScreenSize.SM, height: 48, width: 202 }
                                ]
                            } alt="Environmental Handprint" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )

}