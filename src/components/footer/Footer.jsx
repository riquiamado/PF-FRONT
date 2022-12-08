import React from 'react';

const dates = [
  { name: 'Vania',
    phone: '+525543968273',
    adress: 'Mexico',
    email: 'vania@gmail.com'
  },

  {
    name: 'Carolina',
    phone: '+573166601122',
    adress: 'Colombia',
    email: 'caro@gmail.com'
  },

  {
    name: 'Paula',
    phone: '+573103891118',
    adress: 'Colombia',
    email: 'paula@gmail.com'
  },

  {
    name: 'Carlos',
    phone: '+5493854083473',
    adress: 'Argentina',
    email: 'carlos@gmail.com'
  },

  {
    name: 'Facundo',
    phone: '+5491133508101',
    adress: 'Argentina',
    email: 'facu@gmail.com'
  },

  {
    name: 'Erick',
    phone: '+525537638037',
    adress: 'Mexico',
    email: 'erick@gmail.com'
  },

  {
    name: 'Javier',
    phone: '+523317559458',
    adress: 'Mexico',
    email: 'javi@gmail.com'
  }
];

export default function Footer () { 

return(
    <div>
      <ul>
        <h3>Contacto</h3>
       {dates.map((idx) => (<li>{idx.name}</li>))}
       </ul>

        <ul>
        {dates.map((idx) => (<li>{idx.phone}</li>))}
        </ul>

        <ul>
        {dates.map((idx) => (<li>{idx.adress}</li>))}
        </ul>

        <ul>
        {dates.map((idx) => (<li>{idx.email}</li>))}
        </ul>

        <h3>Redes Sociales</h3>
        
        </div>
)
}
