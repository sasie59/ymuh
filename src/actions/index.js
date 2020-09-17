export const CHANGE = 'CHANGE';
export const ADD_NUMBER = 'ADD_NUMBER';

export const change = () => {
  return{
    type: CHANGE
  };
};

export const addNumber = () => {
  return{
    type: ADD_NUMBER
  };
};