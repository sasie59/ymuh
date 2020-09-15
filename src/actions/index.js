// 入院
export const ADMISSION = 'ADMISSION';
// 出院
export const DISCHARGED = 'DISCHARGED'
// 掛號
export const REGISTERED = 'REGISTERED';
// 初診
export const FIRST_VISIT = 'FIRST_VISIT';
// 取消掛號
export const CANCEL_REGISTERED = 'CANCEL_REGISTERED';


export const admission = () => {
  return {
    type: ADMISSION,
  };
};
export const discharged = () => {
  return {
    type: DISCHARGED,
  };
};
export const registered = () => {
  return {
    type: REGISTERED,
  };
};
export const firstVisit = () => {
  return {
    type: FIRST_VISIT,
  };
};
export const cancelRegistered = () => {
  return {
    type: CANCEL_REGISTERED,
  };
};

