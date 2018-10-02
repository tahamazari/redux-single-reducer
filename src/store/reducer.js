const initialState = {
  age: 20,
  history: []
}

const reducer = (state = initialState, action) => {
  const newState = {...state};

  switch(action.type){
    case 'AGE_UP':
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({id: Math.random(), age: state.age + action.value})
      }
      break;

    case 'AGE_DOWN':
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({id: Math.random(), age: state.age - action.value})
      }
      break;

      case 'DELETE_ITEM':
        return {
          ...state,
          history: state.history.filter(element => element.id !== action.key)
        }
        break;
  }


  return newState;
}

export default reducer;
