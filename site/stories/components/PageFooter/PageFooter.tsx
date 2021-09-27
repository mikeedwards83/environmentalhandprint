
import { Link } from '../../atoms/Link/Link';
import { ILink } from '../../../ui/interfaces/ILink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Hr from '../../atoms/Hr/Hr';

export const PageFooter = (props: {
    links1: ILink[]
    links2: ILink[]
    copyRight: string,
    instagram?: ILink,
    twitter?: ILink,
    facebook?: ILink,
    youtube?: ILink
    className?:string
}) => {

    const { links1, links2, copyRight, instagram, twitter, facebook, youtube, className="" } = props;
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
                                        {instagram && <Link url={instagram.url} target="_blank" className="mx-2">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </Link>}
                                        {twitter && <Link url={twitter.url} target="_blank" className="mx-2 ">                                            <
                                            FontAwesomeIcon icon={faTwitter} />
                                        </Link>}
                                        {facebook && <Link url={facebook.url} target="_blank" className="mx-2 "><FontAwesomeIcon icon={faFacebook} /></Link>}
                                        {youtube && <Link url={youtube.url} target="_blank" className="mx-2 "><FontAwesomeIcon icon={faYoutube} /></Link>}
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