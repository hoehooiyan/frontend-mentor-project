export const truncate = str => {
  const notMoreThan = 31;
  const truncatedString = str.substring(0, notMoreThan);

  if (str.length > 31) {
    return `${truncatedString}...`;
  } else {
    return truncatedString;
  }
};
