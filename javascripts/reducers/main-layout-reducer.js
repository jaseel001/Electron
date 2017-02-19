import * as types from '../actions/action-types';

const initialState = {
  shortMenuState: true,
  moduleListState: true,
  sideMenuState: true
};

const mainLayoutReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.SHORTMENU_SHOW_CHANGE:
      return Object.assign({}, state, {
        shortMenuState: action.status
      });
    case types.MODULELIST_SHOW_CHANGE:
      return Object.assign({}, state, {
        moduleListState: action.status
      })
    case types.SIDEMENU_SHOW_CHANGE:
      return Object.assign({}, state, {
        sideMenuState: action.status
      })

  }

  return state;

}

export default mainLayoutReducer;