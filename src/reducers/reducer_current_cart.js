export default function CurrentCartReducer(state=null, action){
  
  switch(action.type){
    case 'CART_UPDATED': return action.payload;
  }
  
  return  state;

}