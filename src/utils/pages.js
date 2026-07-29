export const getPageCount = (totalUsers, limit) => {
  return Math.ceil(totalUsers / limit);
};

export const getSkip = (page, limit) => {
  return (page - 1) * limit;
};

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
