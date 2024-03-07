import React, { useState } from 'react'

import { crearNuevoProductoAction } from '../actions/productosAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const NuevoProducto = () => {
  const [ nombre, setName ] = useState('')
  const [ precio, setPrecio ] = useState('')
   const navigate = useNavigate();
 

    const dispatch = useDispatch();
    
    const cargando = useSelector ( state => state.productos.loading)
    const error = useSelector(state => state.productos.error)
    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) )

    const submitNuevoProducto = e => {
    e.preventDefault();

    //validar formulario
    if(nombre.trim() ==='' || precio <= 0 ) return;

    // si no hay errores

    // crear el nuevo producto
    agregarProducto({
      nombre,
     precio
    });

    navigate('/')
  }

    
    return ( 
     <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                      Agregar Nuevo Producto
                    </h2>

                    <form action=""
                    onSubmit={submitNuevoProducto}
                    >
                        <div className="form-group">
                            <label htmlFor="">Nombre Producto</label>
                            <input type="text"
                            className='form-control' 
                             placeholder='Nombre Producto'
                             name='nombre'
                             value={nombre}
                             onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Precio Producto</label>
                            <input type="number"
                            className='form-control' 
                             placeholder='Nombre Producto'
                             name='precio'
                             value={precio}
                             onChange={e => setPrecio(e.target.value)}
                            />
                        </div>

                        <button
                         type='submit'
                         className='btn btn-primary font-weigth-bold text-uppercase 
                         d-block w-100'
                        >
                            Agregar

                        </button>


                    </form>
                    {cargando ? <p>cargando..</p> : null } 
                    {error ? <p className='alert alert-danger p2 text-center'>
                      Hubo un error</p>: null}
                </div>
            </div>
        </div>
      </div>
     </>

     );
}
 
export default NuevoProducto;