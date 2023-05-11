const COMPLETAR_AULA = "aulas/COMPLETAR_AULA";
const COMPLETAR_CURSO = "aulas/COMPLETAR_CURSO";
const RESETAR_CURSO = "aulas/RESETAR_CURSO";

export const completarAula = (id) => ({ type: COMPLETAR_AULA, payload: id});
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });

const initialState = [
   {
     id: 1,
     nome: 'Design',
     completa: true,
   },
   {
     id: 2,
     nome: 'HTML',
     completa: false,
   },
   {
     id: 3,
     nome: 'CSS',
     completa: false,
   },
   {
     id: 4,
     nome: 'JavaScript',
     completa: false,
   },
 ];

 const aulasReducer = (state = initialState, action) => {
   switch (action.type) {
      case COMPLETAR_AULA:
         const index = state.findIndex(a => a.id === action.payload);
         const newState = { ...state };
         newState[index].completa = true;
         return newState;
      case COMPLETAR_CURSO:
         const cursoCompleto = state.map(a => ({ ...a, completa: true }));
         return cursoCompleto;
      case RESETAR_CURSO:
         const cursoResetado = state.map(a => ({ ...a, completa: false }));
         return cursoResetado;
      default:
         return state;
   }
 };

 export default aulasReducer;