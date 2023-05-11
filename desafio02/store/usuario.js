const USUARIO_FETCH_STARTED = 'user/FETCH_STARTED';
const USUARIO_FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const USUARIO_FETCH_ERROR = 'user/FETCH_ERROR';

const usuarioFetchStarted = () => ({ type: USUARIO_FETCH_STARTED });
const usuarioFetchSuccess = (payload) => ({ type: USUARIO_FETCH_SUCCESS, payload });
const usuarioFetchError = (payload) => ({ type: USUARIO_FETCH_ERROR, payload });

export const fetchUsuario = (token) => {
   return async (dispatch) => {
      try {
         dispatch(usuarioFetchStarted());
         const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'GET',
            headers: {
               Authorization: 'Bearer ' + token,
            },
         });
         
         const data = await response.json();
         
         dispatch(usuarioFetchSuccess(data));
       } catch (error) {
         dispatch(usuarioFetchError(error.message));
       }
   }
}

const initialState = {
   loading: false,
   error: false,
   data: null
};

const usuario = (state = initialState, action) => {
   switch(action.type) {
      case USUARIO_FETCH_STARTED:
         return { loading: true, error: false, data: null }
      case USUARIO_FETCH_SUCCESS:
         return { loading: false, error: false, data: action.payload }
      case USUARIO_FETCH_ERROR:
         return { loading: false, error: true, data: null };
      default:
         return state;
   }
}

export default usuario;