// cada reducer tiene su propio state
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
} from '../../types'
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoeliminar: null
}

export default function(state = initialState, action){
   switch(action.type){
    case COMENZAR_DESCARGA_PRODCUTO:
    case AGREGAR_PRODUCTO: 
       return {
        ...state,
        loading: action.payload
       }
     case AGREGAR_PRODUCTO_EXITO:
        return {
            ...state,
            loading: false,
            productos: [...state.productos, action.payload ]
        }
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGAR_PRODUCTOS_EXITOS:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload 
            }
            case OBTENER_PRODCUTO_ELIMINAR :
                return{
                    ...state,
                    productoeliminar: action.payload
                }
            case PRODCUTO_ELIMINAR_EXITO:
                return{
                    ...state,
                    productos: state.productos.filter(producto=> producto.id !== state.productoeliminar ),
                    productos: null
                }
    default:
        return state;

   }
     
}