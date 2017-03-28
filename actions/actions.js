import AppConstants from '../constants/constants';
import { register, dispatch } from '../dispatchers/dispatchers';

export default {
  addUser(user){
    dispatch({
      actionType: AppConstants.ADD_USER, user
    });
  },
  removeUser(user){
    dispatch({
      actionType: AppConstants.REMOVE_USER, user
    });
  }
}
