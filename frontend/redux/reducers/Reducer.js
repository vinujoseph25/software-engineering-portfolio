

const reducer = (state = { count: 1, a:20}, action) => {
 var currentCount=state.count;  //1
console.log("inside reducer",currentCount );

  
  switch (action.type) {
      case 'INCREMENT':
      return  Object.assign({},state,{count:currentCount+1}) ; //2
	  
	   case 'DECREMENT':
      return  Object.assign({},state,{count:currentCount+1}) ;
	  
    default:
      return state;
  }
  
}

export default reducer;