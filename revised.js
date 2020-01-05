const staffingRequest = {
  startDate: '2018-06-01',
  endDate: '2020-06-01'
};

function isCovered(assignments) {
  assignments.sort((o1, o2) => o1.startDate < o2.startDate ? -1 : 1);
  if (assignments[0].startDate > staffingRequest.startDate || getMaxEnd(assignments) < staffingRequest.endDate) {
    return false;
  } else {
    let tempObj = {
      startDate: assignments[0].startDate,
      endDate: assignments[0].endDate
    }
    for (let i = 1; i < assignments.length; i++) {
      if (tempObj.endDate < assignments[i].startDate) {
        return false;
      }
      tempObj.endDate = assignments[i].endDate;
    }
    return true;
  }

}

function getMaxEnd(array) {
  return array.reduce((prev, curr) => {
    if (prev < curr.endDate) {
      return curr.endDate;
    }
    return prev;
  }, array[0].endDate)
}

module.exports = isCovered;