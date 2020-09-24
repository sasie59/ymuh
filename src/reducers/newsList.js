import { CHANGE_ARTICLE } from 'actions';

import { newsList as initData } from './initialData';

export default function newsList(state = initData, action) {
  switch(action.type) {
    case CHANGE_ARTICLE:
      return {
        ...state,
        select: action.choice,
      }
    default:
      return state;
  };
};