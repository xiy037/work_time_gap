const isCover = require("./index");

describe("Is custromer's request met?", () => {
  const assignments1 = [
    {
      startDate: '2019-10-01',
      endDate: '2020-06-01',
    },
    {
      startDate: '2018-06-01',
      endDate: '2019-03-11',
    },
    {
      startDate: '2018-10-16',
      endDate: '2019-10-31',
    }
  ];
  
  const assignments2 = [
    {
      startDate: '2019-10-01',
      endDate: '2020-03-01',
    },
    {
      startDate: '2018-10-01',
      endDate: '2019-06-01',
    },
  ];
  
  const assignments3 = [
    {
      startDate: '2019-10-01',
      endDate: '2020-03-01',
    },
    {
      startDate: '2018-10-01',
      endDate: '2019-06-01',
    },
    {
      startDate: '2018-10-01',
      endDate: '2019-07-01',
    },
  ];
  
  const assignments4 = [
    {
      startDate: '2019-10-01',
      endDate: '2020-03-01',
    },
    {
      startDate: '2018-06-01',
      endDate: '2019-03-11',
    },
    {
      startDate: '2019-10-16',
      endDate: '2020-06-01',
    }
  ];
  
  
  it ("", () => {
    expect(isCover(assignments1)).toEqual(true);
  });

 it ("", () => {
    expect(isCover(assignments2)).toEqual(false);
  });

  it ("", () => {
    expect(isCover(assignments3)).toEqual(false);
  });

  it ("", () => {
    expect(isCover(assignments4)).toEqual(false);
  });
});
