import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODCUTO,
    DESCARGAR_PRODUCTOS_EXITOS,
    DESCARGA_PRODUCTOS_ERROR,  
    OBTENER_PRODCUTO_ELIMINAR,
    PRODCUTO_ELIMINAR_EXITO,
    PRODCUTO_ELIMINAR_ERROR
} from '../types'

import clienteAxios from '../config/axios'
// Crear nuevos prodcutos

import Swal from 'sweetalert2'


export function crearNuevoProductoAction(producto){
    return  async (dispatch) => {
        dispatch( agregarProducto() )
       
        try {
           // insertar en la api
          await clienteAxios.post('/productos', producto)

            dispatch( agregarProductoExito(producto))

            Swal.fire(
                'Correcto',
                'El producto se guardo Correctamente',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch( agregarProductoError(true))
        }

    }
}

const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// si el producto se guarda en la base de dato

const agregarProductoExito = producto =>({
    type:AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado => ({
    type:AGREGAR_PRODUCTO_ERROR,
    payload: estado
})


export function obtenerProductoAction(){
    return async (dispatch) =>{
        dispatch(descargarProductos())

        try {
         const respuesta =  await clienteAxios.get('/productos');
              dispatch(descargarProductosExitosa(respuesta.data));
         
        } catch (error) {
            console.log(error)
            dispatch( descargarProductoError())
        }

    }

}


const descargarProductos = () => ({
      type: COMENZAR_DESCARGA_PRODCUTO,
      payload:  true

})
const descargarProductosExitosa = productos => ({
      type: DESCARGAR_PRODUCTOS_EXITOS,
      payload: productos,
      
})
const descargarProductoError = () => ({
      type: DESCARGA_PRODUCTOS_ERROR,
      payload: true

})



export function borrarProdcutoAction(id){
    return async (dispatch) => {
        dispatch(ObtenerProductoEliminar(id));


        try {
        
           await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())
 //mostrar alerta si esta eliminado 
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
        } catch (error) {
            
        }

    }
}

const ObtenerProductoEliminar = id =>({
    type: OBTENER_PRODCUTO_ELIMINAR,
     payload: id
});

const eliminarProductoExito = () =>({
type: PRODCUTO_ELIMINAR_EXITO

});