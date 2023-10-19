export const deleteEmpty = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === "" || obj[key] === null) delete obj[key];
  });
  return obj;
};
