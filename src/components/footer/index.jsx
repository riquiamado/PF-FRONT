import React from 'react';
import Facebook from './facebook-svgrepo-com.svg';
import Twitter from './twitter-svgrepo-com.svg';
import Instagram from './instagram-svgrepo-com.svg';
import GitHub from './github-svgrepo-com.svg';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

/* function Footer () { 

return(
  <div>
    <h3>Contact</h3>
    <details>
  <summary>Paula</summary>
  <ul>
  <li>Phone: +573103891118</li>
  <li>Adress: Colombia</li>
  <li>Email: pau@gmail.com</li>
  </ul>
  </details>
  <details>
  <summary>Carolina</summary>
  <ul>
  <li>Phone: +573166601122</li>
  <li>Adress: Colombia</li>
  <li>Email: caro@gmail.com</li>
  </ul>
  </details>
  <details>
  <summary>Vania</summary>
  <ul>
  <li>Phone: +525543968273</li>
  <li>Adress: Mexico</li>
  <li>Email: vania@gmail.com</li>
  </ul>
  </details>
  <details>
  <summary>Carlos</summary>
  <ul>
  <li>Phone: +5493854083473</li>
  <li>Adress: Argentina</li>
  <li>Email: carlos@gmail.com</li>
  </ul>
  </details>
  <details>
  <summary>Facundo</summary>
  <ul>
  <li>Phone: +5491133508101</li>
  <li>Adress: Argentina</li>
  <li>Email: facu@gmail.com</li>
  </ul>
  </details>
  <details>
  <summary>Erick</summary>
  <ul>
  <li>Phone: +525537638037</li>
  <li>Adress: Mexico</li>
  <li>Email: erick@gmail.com</li>
  </ul>
  </details>
  <details>
  <summary>Javier</summary>
  <ul>
  <li>Phone: +523317559458</li>
  <li>Adress: Mexico</li>
  <li>Email: javi@gmail.com</li>
  </ul>
  </details>

  <h3>Redes Sociales</h3>
  <img style={{ height: 53, width: 36 }} src={Facebook}/>
  <img style={{ height: 53, width: 36 }} src={Twitter}/>
  <img style={{ height: 53, width: 36 }} src={Instagram}/>
  <img src={GitHub}/>

  <h3>Sobre Nosotros</h3>
  <p>Desde que nacimos nuestro concepto a brindado las mejores soluciones y junto contigo hemos encontrado nustra familia.</p>
  <p>Te invitamos a probar la gran gama de sorpresas que tenemos para ti.</p>  
  </div>
)
}

export default Footer */

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-3 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='' className='me-4 text-reset'>
            <i class="bi bi-facebook"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="bi bi-twitter"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="bi bi-google"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="bi bi-instagram"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="bi bi-linkedin"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="bi bi-github"></i>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-3'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i class="bi bi-gem"></i>
                  Freelance Workers
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
                <i class="bi bi-building"></i>
                COL, MX, AR 
              </p>
              <p>
                <i class="bi bi-envelope"></i>
                freelanceworkers@gmail.com
              </p>
              <p>
                <i class="bi bi-telephone"></i> + 555 555 5555
              </p>
              <p>
                <i class="bi bi-telephone"></i> + 555 555 5555
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

