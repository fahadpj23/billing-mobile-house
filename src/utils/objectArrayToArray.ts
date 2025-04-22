export const objectArrayToArray = (objArray: any) => {
  const valuesOnly = objArray.map((obj: any) => Object.values(obj));
  return valuesOnly;
};
