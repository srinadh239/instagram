export const convertTime = (time) => {
  const currentTime = new Date();

  const diffMs = (currentTime - time); // milliseconds 

  const diffYears = Math.round(diffMs / 29030400000) // years
  const diffMonths = Math.round(diffMs / 2419200000) // months
  const diffWeeks = Math.round(diffMs / 604800000); // weeks
  const diffDays = Math.floor(diffMs / 86400000); // days
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

  const timeDiff = (diffYears === 0 ?
    (diffMonths === 0 ?
      (diffWeeks === 0 ?
        (diffDays === 0 ?
          (diffHrs === 0 ? `${diffMins} ${diffMins > 1 ? 'mins' : 'min'}`
            : `${diffHrs} ${diffHrs > 1 ? 'hrs' : 'hr'}`)
          : `${diffDays} ${diffDays > 1 ? 'days' : 'day'}`)
        : `${diffWeeks} ${diffWeeks > 1 ? 'weeks' : 'week'}`)
      : `${diffMonths} ${diffMonths > 1 ? 'months' : 'month'}`)
    : `${diffYears} ${diffYears > 1 ? 'yrs' : 'yr'}`);

  return timeDiff;
}