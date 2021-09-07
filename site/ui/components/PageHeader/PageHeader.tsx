import "./PageHeader.scss"
export const PageHeader = (props:{
    logo:string,
    title:string,
}) => {

    const {logo,title} = props;

    return (
        <nav className="navbar navbar-expand-lg  tt-fg-primary-dark">
            <a className="navbar-brand" href="/">
                <img src={logo} style={{ maxHeight: "50px" }} className="pr-2" alt={title} />
            </a>
            <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto  ">
                    <li className="nav-item pr-3 d-none d-lg-block">
                        <a href="https://app.myforest.earth/login?returnUrl=/sc/forest" className="btn tt-btn-primary-light ">
                            <i className="fa fa-trees"></i>  Login
                        </a>
                        <a href="https://app.myforest.earth/signup" className="btn tt-btn-primary-dark ">
                            <i className="fa fa-acorn"></i>  Join Now
                        </a>
                    </li>


                    <li className="nav-item text-center ">
                        <button className="btn btn-link side-nav-toggler" data-target="sideNav" title="Show/Hide Menu">
                            <i className="fas fa-bars tt-fg-primary-dark"></i>
                            <span className="pl-2">Menu</span>
                        </button>
                    </li>

                </ul>

            </div>

            <div className=" d-flex d-lg-none" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto  ">
                    <li className="nav-item text-center ">
                        <button className="btn btn-link side-nav-toggler" data-target="sideNav" title="Show/Hide Menu">
                            <i className="fas fa-bars tt-fg-primary-dark"></i>
                            <span className="pl-2">Menu</span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}