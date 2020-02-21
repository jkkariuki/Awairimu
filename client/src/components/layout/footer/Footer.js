import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import eohlogo from "../../../img/eohlogo.jpg";
import realtorLogo from "../../../img/realtor-logo.jpg";
import remaxLogo from "../../../img/remaxLogo.png";

const Footer = () => {
  return (
    <div>
      <footer className='page-footer font-small text-center unique-color-dark pt-4'>
        <div className='footer-copyright text-center py-3' id='footer'>
          <div style={{ marginRight: "0px" }} className='row'>
            <div className='col-lg-4 col-md-4 footerCol'>
              <h6 class='text-uppercase font-weight-bold'>Contact</h6>

              <p>
                <i class='fas fa-home  '></i> Jersey City, NJ 07307, US
              </p>
              <p>
                <i class='fas fa-envelope  '></i> info@example.com
              </p>
              <p>
                <i class='fas fa-phone  '></i> +(201) 987-6543
              </p>
              <div className='container'>
                <ul className='list-unstyled list-inline text-center py-2'>
                  <li className='list-inline-item'>
                    <Link to='' className='fb-ic'>
                      <i className='fab fa-facebook-f fa-lg white-text  fa-2x'>
                        {" "}
                      </i>
                    </Link>

                    <Link to='' className='li-ic'>
                      <i className='fab fa-linkedin-in fa-lg white-text  fa-2x'>
                        {" "}
                      </i>
                    </Link>
                    <Link to='' className='ins-ic'>
                      <i className='fab fa-instagram fa-lg white-text fa-2x'>
                        {" "}
                      </i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 footerCol'>
              <img id='realtorLogolg' alt='logo' src={realtorLogo} />
              <p id='realtorStmt'>
                Only real estate professionals who are members of the NATIONAL
                ASSOCIATION OF REALTORS® may call themselves REALTORS®. All
                REALTORS® must subscribe to NAR’s strict Code of Ethics, which
                is based on honesty, professionalism and the protection of the
                public.
              </p>{" "}
            </div>
            <div className='col-lg-4 col-md-4'>
              {" "}
              <img id='rmxLogo' src={remaxLogo} alt='remax' />
            </div>
          </div>
          <div>
            <img className='footerLogos' alt='logo' src={eohlogo} />
            <img className='footerLogos' alt='logo' src={realtorLogo} />
          </div>

          <div>
            <span>© 2020 Copyright: www.letsgohomes.com</span>{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
