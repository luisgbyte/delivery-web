import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import product from './product/reducer';
import modal from './modal/reducer';
import category from './category/reducer';

export default combineReducers({ auth, user, product, modal, category });
