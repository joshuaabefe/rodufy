function Footer() {
    return (
        //  footer tag
        <footer className="container-fluid bgcolor">
        <div className="container basic Montserrat text-center">
            <div className="row">
            {/* eslint-disable-next-line */}
                <div className="footer-title text-uppercase text-start Oswald">
                    {/* eslint-disable-next-line */}
                    <a className="navbar-brand text-uppercase Oswald" href="#">Rodufy<span>.</span></a>
                </div>
                <div className="col-lg-3 col-12">
                    <h5>Blog</h5>
                </div>
                <div className="col-lg-3 col-12">
                    <h5>Privacy Policy</h5>
                </div>
                <div className="col-lg-3 col-12">
                    <h5>About</h5>
                </div>
                <div className="col-lg-3 col-12">
                    <h5>Contact</h5>
                </div>
            </div>
            <div className="text-center mt-5">
                <h6>Copyright <i className="fa fa-copyright"></i> 2022 Template by joshabefedev@gmail.com</h6>
            </div>
        </div>
    </footer>
    );
}

export default Footer;