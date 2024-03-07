import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductoAction } from '../actions/productosAction';
import Producto from './Producto';

const Productos = () => {

const dispatch = useDispatch();

useEffect(() =>{
// consultar la api
const cargarProductos = () => dispatch(obtenerProductoAction())
cargarProductos();

},[])

const productos = useSelector(state => state.productos.productos)
const error = useSelector(state => state.error)


    return (
     <>
       <h2 className='text-center my-5'>Listado de Productos</h2>
       {error ? <p className='alert alert-danger p2 text-center'> 
        Hubo un error</p>: null}
       <table className='table table-striped'>
        <thead className="bg-primary table-dark">
            <tr>
                <th scope='col'>Nombre</th>
                <th scope='col'>Precio</th>
                <th scope='col'>Acciones</th>
            </tr>
            
        </thead>
        <tbody>
            {productos.length === 0 ? 'No hay productos': (
                productos.map(item=>(
                    <Producto
                       key={item.id}
                       producto={item}
                    />
                ))
            )}
        </tbody>
        </table>   
    </>
    );
}
 
export default Productos;