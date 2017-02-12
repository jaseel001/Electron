import * as types from '../actions/action-types';

export function shortMenuChange(status) {
  return {
    type: types.SHORTMENU_SHOW_CHANGE,
    status
  };
}

export function moduleListChange(status) {
  return {
    type: types.MODULELIST_SHOW_CHANGE,
    status
  };
}