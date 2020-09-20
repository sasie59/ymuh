
import newsData from './newsData/homeAnnouncement.json';

import { CHANGE_ARTICLE } from 'actions';
const initial = newsData;
export default function newsList(state = initial, action) {
  switch(action.type) {
    case CHANGE_ARTICLE:

    default:
      return state;
  };
};