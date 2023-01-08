import React from 'react';
import Facebook from './facebook-svgrepo-com.svg';
import Twitter from './twitter-svgrepo-com.svg';
import Instagram from './instagram-svgrepo-com.svg';
import GitHub from './github-svgrepo-com.svg';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-3 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-facebook"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-twitter"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-google"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-instagram"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-linkedin"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-github"></i>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-3'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className="bi bi-gem"> Freelance Workers</i>
              </h6>
              <p>
                We are a company that seeks to connect people by offering services. If you are interested in being part of our Providers, contact us.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Creators</h6>
              <p>
                Paula Ramírez
              </p>
              <p>
                Carlos Amado
              </p>
              <p>
                Vania Martínez
              </p>
              <p>
                Erick Monterrubio
              </p>
              <p>
                Javier Montaño
              </p>
              <p>
                Facundo Alonso
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  GitHub
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Discord
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Slack
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Trello
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className="bi bi-building"> COL, MX, AR </i>
              </p>
              <p>
                <i className="bi bi-envelope"> freelanceworkers@gmail.com</i>
              </p>
              <p>
                <i className="bi bi-telephone"></i> + 555 555 5555
              </p>
              <p>
                <i className="bi bi-telephone"></i> + 555 555 5555
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <br />
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          FreelanceWorkers.com
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;

