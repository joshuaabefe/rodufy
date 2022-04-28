function Main() {
    return (
      <div className="Main">
        <MainOne />
        <MainTwo />
      </div>
    );
  }
 function MainOne() {
    return (
        // basic class for first section tag
        <section className="container-fluid">
        <div className="container basic">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="text-container-main Oswald">
                        {/* eslint-disable-next-line */}
                        <h2 className="text-capitalize">Everything you'll need to <a href="#">excel</a> in life</h2>
                        {/* eslint-disable-next-line */}
                        <p className="Montserrat">We've curated a list of valuable resources to get you going in life, all for free</p>
                        {/* eslint-disable-next-line */}
                        <p><a className="btn btn-discover text-capitalize fw-normal" href="#">get started</a></p>
                    </div>
                </div>
                <div className="col-lg-6 col-12 gx-0">
                    <div className="first-image-container rounded shadow-sm"></div>
                </div>
            </div>
        </div>
        </section>
    );
  }

  function MainTwo() {
    return (
        // basic class for second section tag
        <section className="container-fluid contact">
        <div className="container basic">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="text-container-main Oswald">
                        {/* eslint-disable-next-line */}
                        <h2 className="text-capitalize">Contact us</h2>
                        <p className="Montserrat">Get any questions, feedback, request and complains? reach out...</p>
                        <div className="Montserrat">
                            <ul className="list-unstyled">
                            {/* eslint-disable-next-line */}
                                <li className="contact-us"><img src="assets/img/whatsapp-logo-icon-vector-27990481.jpg" alt="" />
                                    <span className="contact-text">
                                        <a href="tel:+2349081539986">+234 908 153 9986</a>
                                    </span>
                                </li>
                                {/* eslint-disable-next-line */}
                                <li className="contact-us"><img src="assets/img/email.jpg" alt="" />
                                    <span className="contact-text">
                                        <a href="mailto:joshabefedev@gmail.com">joshabefedev@gmail.com</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="second-image-container rounded shadow-sm"></div>
                </div>
            </div>
        </div>
        </section>
    );
  }
  

  export default Main;