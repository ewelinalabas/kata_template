export const duplicateCount = text => {
  const countedChars = 
  text
  .toLowerCase()
  .split("")
  .reduce((obj, char) => {
    obj[char] ? obj[char] += 1 : obj[char] = 1
    return obj
  }, {});
  
  return Object.values(countedChars).filter(value => value > 1).length
}