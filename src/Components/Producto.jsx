import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { borrarProdcutoAction } from '../actions/productosAction';
import Swal from 'sweetalert2';

const Producto = ({producto}) => {
  const dispatch = useDispatch();

   const ConfirmarEliminarProducto = id => {
   
    Swal.fire({
      title: "Esta seguro",
      text: "Estas seguro que quiere eliminar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(borrarProdcutoAction(id))
      
      }
    });

   }



    const {nombre , precio, id } = producto;
    return (
      <tr>
        <td>{nombre}</td>
        <td><span className='font-weight-bold'> ${precio}</span></td>
        <td className='acciones'>
            <Link to={`/productos/nuevos/${id}`} className='btn btn-primary mr-2'
            >Editar</Link> 
            <button
            type='button'
             className='btn btn-danger'
             onClick={() => ConfirmarEliminarProducto(id)}
            >
              eliminar
            </button>

        </td>
      </tr>

      );
}
 
export default Producto;