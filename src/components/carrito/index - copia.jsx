// // Importa las dependencias necesarias
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';




// const Cart = () => {
//   const dispatch = useDispatch()
//   const carts = useSelector((state) => state.cart)
//   // const {id} = useParams()
  
// //  const handleCart = () => {
// //     dispatch(addToCart(id))
// //   }
//   return (
//     <div>
//       <h1>My Shopping Cart</h1>
//       <select name="" id="">
//       {carts.map((product) => (
//              <li key={product.id}>{product.name}</li>
//            ))}
//       </select>
// <h1>items ..</h1>

//     </div>
//   )
  

// }
// export default Cart;



// // Crea el componente "Cart"
// // class Cart extends React.Component {
// //   // Define una función de devolución de llamada que se llamará cuando se haga clic en un botón "agregar al carrito"
// //   handleAddToCartClick = (productId) => {
// //     // Llama a la acción "addToCart" de Redux y pasa el ID del producto como argumento
// //     this.props.addToCart(productId);
// //   }

// //   // Define cómo se renderizará el componente
// //   render() {
// //     // Obtiene el contenido del carrito de compras del estado de la aplicación
// //     const { cart } = this.props;

// //     return (
// //       <div>
// //         {/* Muestra el contenido del carrito de compras */}
// //         <h1>My Shopping Cart</h1>
// //         <ul>
// //           {cart.map((product) => (
// //             <li key={product.id}>{product.name}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   }
// // }

// // // Enlaza el componente "Cart" con el estado de la aplicación utilizando el enlazador "connect" de Redux
// // const mapStateToProps = (state) => ({
// //   cart: state.cart,
// // });

// // const mapDispatchToProps = (dispatch) => ({
// //   addToCart: (productId) => dispatch(addToCart(productId)),
// // });

// // export default connect(mapStateToProps, mapDispatchToProps)(Cart);