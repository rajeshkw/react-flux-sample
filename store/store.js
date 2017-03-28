import AppConstants from '../constants/constants';
import { register, dispatch } from '../dispatchers/dispatchers';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _users = [{
  id:1,
  firstName:'Rajesh',
  lastName: 'Wasave'
},
{
  id:2,
  firstName:'Donald',
  lastName: 'Trump'
}];

const AppStore = Object.assign(EventEmitter.prototype,{
  emitChange(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },
  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },
  getUsers(){
    return _users;
  },
  dispatcherIndex: register( ( action ) => {
    debugger;
    switch(action.actionType){
      case AppConstants.ADD_USER:
          _users.push( Object.assign({id: _users.length+1 }, action.user) );
          break;
      case AppConstants.REMOVE_USER:
          _users.splice( _users.findIndex( i => i === action.user ), 1 );
          break;
    }
    AppStore.emitChange();
  })
});

export default AppStore;
