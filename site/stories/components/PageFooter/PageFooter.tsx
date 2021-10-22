
import { Link } from '../../atoms/Link/Link';
import { ILink } from '../../../ui/interfaces/ILink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Hr from '../../atoms/Hr/Hr';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

export const PageFooter = (props: {
    links1: ILink[]
    links2: ILink[]
    copyRight: string,
    className?:string
}) => {

    const { links1, links2, copyRight, className="" } = props;
    return (
        <div className={`${className}`}>
            <Hr  />
            <div className="container">
                <footer className="footer">
                    <div className="row ">

                        <div className="d-none d-md-flex col-md-4">
                            <ul className="list-group list-group-flush w-100">
                                {links1.map(x =>
                                    <li key={x.url} className="list-group-item">
                                        <Link url={x.url}>{x.text}</Link>
                                    </li>)}
                            </ul>
                        </div>

                        <div className="d-none d-md-flex col-md-4">

                            <ul className="list-group list-group-flush w-100">
                                {links2.map(x =>
                                    <li key={x.url} className="list-group-item">
                                        <Link url={x.url}>{x.text}</Link>

                                    </li>)}

                            </ul>
                        </div>
                        <div className="col-12 d-md-none text-center pb-4">
                            <ul className="list-group list-group-flush">
                                {links1.map(x =>
                                    <li key={x.url} className="list-group-item">
                                        <Link url={x.url}>{x.text}</Link>

                                    </li>)}
                                {links2.map(x =>
                                    <li key={x.url} className="list-group-item">
                                        <Link url={x.url}>{x.text}</Link>

                                    </li>)}

                            </ul>
                        </div>




                        <div className="col-md-4 ">
                            <div className="row align-items-center" style={{ height: "100%" }}>
                                <div className="col-12">
                                    <div className="text-center">
                                        <p>{copyRight}</p>
                                    </div>
                                    <div className="text-center PageFooter-SocialMedia">
                                      <SocialMediaIcons />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
    )
}