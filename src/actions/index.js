export const CHANGE_ARTICLE = 'CHANGE_ARTICLE';
export const CHANGE_DEPARTMENT = 'CHANGE_DEPARTMENT';


export const changeDepartment = () => {
  return {
    type: CHANGE_DEPARTMENT
  };
};

export const changeArticle = (choice) => {
  return {
    type: CHANGE_ARTICLE,
    choice
  };
};