import Flux from 'flux';

const flux = new Flux.Dispatcher();

export function register(callback){
  console.log('registered'+callback);
  return flux.register(callback);
}

export function dispatch(actionType,action){
  console.log('dispatching -'+action)
  return flux.dispatch(actionType,action);
}
