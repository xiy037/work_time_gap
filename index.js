const staffingRequest = {
  startDate: '2018-06-01',
  endDate: '2020-06-01'
};

function isCovered(assignments) {
  const startDateArr = [];
  const len = assignments.length;
  for(let i = 0; i < len; i++) {
    let DateScope = {
      startDate : assignments[i].startDate,
      endDate : assignments[i].endDate
    }
    startDateArr.push(DateScope);
  }
  const sortedArr = sortArray(startDateArr);
  console.log(sortedArr);
  console.log(maxEndDate(sortedArr));
  if (sortedArr[0].startDate > staffingRequest.startDate || maxEndDate(sortedArr) < staffingRequest.endDate) {
    return false;
  } else if (innerDateGap(sortedArr)) {
    return false;
  }
  return true;
}

function sortArray(array) {
  const len = array.length;
  for(let i = 0; i < len - 1; i++) {
    if (array[i].startDate > array[i + 1].startDate) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  return array;
}

function maxEndDate(array) {
  return array.reduce((prev, curr) => {
    if (prev < curr.endDate) {
      return curr.endDate;
    }
    return prev;
  }, array[0].endDate)
}

function innerDateGap(sortedArr) {
  const len = sortedArr.length;
  for(let i = 0; i < len - 1; i++) {
    if (sortedArr[i].endDate < sortedArr[i + 1].startDate) {
      return true;
    }
  }
  return false;
}

module.exports = isCovered;