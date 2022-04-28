import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 function Navbar() {
    return (
      // Main
      <main className='container-fluid bgcolor'>
        <div className='container basic-main'>
          {/* Navigation */}
          <nav className='navbar navbar-expand-lg py-4' id='mainNav'>
            <div className='container px-4 px-lg-5'>
              {/* eslint-disable-next-line */}
              <a href='' className='navbar-brand text-uppercase Oswald'>Rodufy<span>.</span></a>
              <button className='navbar-toggler' id='buttonOne' data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
               <FontAwesomeIcon icon="fa-solid fa-bars" id='navIcon' />
              </button>
              <div className='collapse navbar-collapse Montserrat' id='navbarResponsive'>
                  <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <a href="register.html" className='btn nav-link'>REGISTER</a>
                    </li>
                    <li className='nav-item'>
                        <a href="login.html" className='btn nav-link'>LOGIN</a>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <div className='text-container-main Oswald'>
                {/* eslint-disable-next-line */}
                <h2 className='text-capitalize'>Our mission is to <a href='#'>advance</a> humanity</h2>
                <p className='Montserrat'>We would strive to acheive that through providing education and quality health</p>
                <div className='Montserrat'>
                  <p className='download'>DOWNLOAD APP</p>
                  {/* eslint-disable-next-line */}
                  <a href='#' className='download-link rounded shadow-sm'>
                    <img src='assets/img/playstore.png' alt='' />
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href='#' className='download-link rounded shadow-sm'>
                    <img src='assets/img/App-Store-Logo.png' alt='' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 gx-0'>
              <div className='carousel slide' id='myCarousel' data-bs-ride="carousel">
                <div className='carousel-indicators'>
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className='active' aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img src='assets/img/dark-wall-empty-room-with-plants-floor-3d-rendering_41470-3847.webp' alt='' className='image-container-img rounded shadow-sm' />
                  </div>
                  <div className='carousel-item'>
                    <img src='assets/img/green-wall-mockup-with-green-plant-shelf3d-rendering_41470-4114.webp' alt='' className='image-container-img rounded shadow-sm' />
                  </div>
                  <div className='carousel-item'>
                    <img src='assets/img/living-room-with-yellow-armchair-empty-dark-blue-wall-background-3d-rendering_41470-3901.webp' alt='' className='image-container-img rounded shadow-sm' />
                  </div>
                </div>
                <button className='carousel-control-prev' type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span className='carousel-control-next-icon' aria-hidden="true"></span>
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>    
            </div>
          </div>
        </div>
      </main>
    );
  }

  export default Navbar;