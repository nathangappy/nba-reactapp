// Switch statement to return the formatted quarter if game is in progress
export const FormatQuarter = (period) => {
  switch (period) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    case 4:
      return '4th';
    case period > 4:
      return 'OT' + period;
  }
};
