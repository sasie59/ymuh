import { CHANGE_ARTICLE } from 'actions';

import { newsList as initData } from './initialData';

export default function newsList(state = initData, action) {
  switch(action.type) {
    case CHANGE_ARTICLE:
      console.warn('aaa');
      return state;
    default:
      return state;
  };
};