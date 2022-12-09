import React from 'react';
import Facebook from './facebook-svgrepo-com.svg';
import Twitter from './twitter-svgrepo-com.svg';
import Instagram from './instagram-svgrepo-com.svg';
import GitHub from './github-svgrepo-com.svg';

function Footer () { 

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

export default Footer
