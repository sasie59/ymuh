import {
    REAL_TIME_INFO,
    } from '../actions/index'

const initial = {
  index: 0,
  list: [
    {division: '腎臟科', name: '陳甫安', number: 42},
    {division: '心臟內科', name: '廖照峰', number: 31},
    {division: '胸腔內科', name: '陳秀丹', number: 11},
    {division: '神經內科', name: '蔡秉晃', number: 54},
    {division: '新陳代謝科', name: '許黎洲', number: 9},
    {division: '肝膽腸胃科', name: '楊宜寰', number: 21},
    {division: '血液腫瘤科', name: '王緯書', number: 71},
  ]
};

export default function internalMed( state = initial, action) {
  switch(action.type) {
    case REAL_TIME_INFO:
      const newList = state.list.map(item => {
        item.number++;
        return item;
      });
      return {
        index: (state.index + 1) % state.list.length,
        list: newList,
      }
    default:
      return state;
  }
}


