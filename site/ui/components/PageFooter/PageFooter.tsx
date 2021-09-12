
import { Link } from '../../atoms/Link/Link';
import { ILink } from '../../interfaces/ILink'

export const PageFooter = (props: {
    links1: ILink[]
    links2: ILink[]
    copyRight: string,
    instagram?: ILink,
    twitter?: ILink,
    facebook?: ILink,
    youtube?: ILink
}) => {

    const { links1, links2, copyRight, instagram, twitter, facebook, youtube } = props;
    return (
        <>
            <hr style={{ borderWidth: "2px", marginTop: "60px" }}></hr>
            <div className="container">
                <footer className="footer">
                    <div className="row ">

                        <div className="d-none d-md-flex col-md-4">
                            <ul className="list-group list-group-flush w-100">
                                {links1.map(x =>
                                    <li className="list-group-item">
                                        <Link link={x} />
                                    </li>)}
                            </ul>
                        </div>

                        <div className="d-none d-md-flex col-md-4">

                            <ul className="list-group list-group-flush w-100">
                                {links2.map(x =>
                                    <li className="list-group-item">
                                        <Link link={x} />
                                    </li>)}

                            </ul>
                        </div>
                        <div className="col-12 d-md-none text-center pb-4">
                            <ul className="list-group list-group-flush">
                                {links1.map(x =>
                                    <li className="list-group-item">
                                        <Link link={x} />
                                    </li>)}
                                {links2.map(x =>
                                    <li className="list-group-item">
                                        <Link link={x} />
                                    </li>)}

                            </ul>
                        </div>




                        <div className="col-md-4 ">
                            <div className="row align-items-center" style={{ height: "100%" }}>
                                <div className="col-12">
                                    <div className="text-center">
                                        <p>{copyRight}</p>
                                    </div>
                                    <div className="text-center">
                                        {instagram && <Link link={instagram} target="_blank" className="mx-2 tt-instagram"><i className="fab fa-instagram"></i></Link>}
                                        {twitter && <Link link={twitter} target="_blank" className="mx-2 tt-twitter"><i className="fab fa-twitter"></i></Link>}
                                        {facebook && <Link link={facebook} target="_blank" className="mx-2 tt-facebook"><i className="fab fa-facebook"></i></Link>}
                                        {youtube && <Link link={youtube} target="_blank" className="mx-2 tt-facebook"><i className="fab fa-youtube"></i></Link>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        </>
    )
}