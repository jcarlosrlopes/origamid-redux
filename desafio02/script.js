import store from './store/configureStore.js';
import { fetchToken } from './store/token.js';
import { fetchUsuario } from './store/usuario.js';

async function login(user) {
   let state = store.getState();

   if (state.token.data === null) {
      await store.dispatch(fetchToken(user));
      state = store.getState();
   }

   await store.dispatch(fetchUsuario(state.token.data));
}

await login({ username: 'dog', password: 'dog' });
