import {
  CHANGE_DEPARTMENT,
  } from 'actions';

import { fourList as initData } from './initialData';

function plusNumberAndIndex(state) {
  const { list } = state;
  list[state.index].number++;
  return {
    index: (state.index + 1) % state.list.length,
    list,
  }
}

export default function fourList( state = initData, action) {
  switch(action.type) {
    case CHANGE_DEPARTMENT:
      return {
        otherList: plusNumberAndIndex(state.otherList), // otherList 已換科，並把目前小科number + 1
        surgicalList: plusNumberAndIndex(state.surgicalList), // surgicalList 已換科，並把目前小科number + 1
        internalMedList: plusNumberAndIndex(state.internalMedList), // internalMedList 已換科，並把目前小科number + 1
        gynAndPediatricsList: plusNumberAndIndex(state.gynAndPediatricsList), // gynAndPediatricsList 已換科，並把目前小科number + 1
      };
    default:
      return state;
  }
}