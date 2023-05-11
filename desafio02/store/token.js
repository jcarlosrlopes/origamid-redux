import getLocalStorage from "./helper/getLocalStorage.js";

const TOKEN_FETCH_STARTED = 'token/FETCH_STARTED';
const TOKEN_FETCH_SUCCESS = 'token/FETCH_SUCCESS';
const TOKEN_FETCH_ERROR = 'token/FETCH_ERROR';

const tokenFetchStated = () => ({ type: TOKEN_FETCH_STARTED });
const tokenFetchSuccess = (payload) => ({ type: TOKEN_FETCH_SUCCESS, payload, localStorage: 'token' });
const tokenFetchError = (payload) => ({ type: TOKEN_FETCH_ERROR, payload });

export const fetchToken = (user) => {
   return async (dispatch) => {
      try {
         dispatch(tokenFetchStated());
         const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
         {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(user),
         });
         
         const { token } = await response.json();
         dispatch(tokenFetchSuccess(token));
       } catch (error) {
         dispatch(tokenFetchError(error.message));
       }
   }
}



const initialState = {
   loading: false,
   error: false,
   data: getLocalStorage('token', null)
};

const token = (state = initialState, action) => {
   switch(action.type) {
      case TOKEN_FETCH_STARTED:
         return { loading: true, error: false, data: null }
      case TOKEN_FETCH_SUCCESS:
         return { loading: false, error: null, data: action.payload }
      case TOKEN_FETCH_ERROR:
         return { loading: false, error: action.payload , data: null };  
      default:
         return state;
   }
}

export default token;