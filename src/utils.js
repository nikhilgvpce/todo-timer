const utils = {};

utils.getHoursPassed = (time) => parseInt((time / (1000 * 60 * 60)) % 60);

utils.getMinutesPassed = (time) => parseInt((time / (1000 * 60)) % 60);

utils.getMessage = (value = null, shorForm = null) => {
  if (!(value && shorForm)) {
    return "Task created just now";
  } else {
    const _shortForm = value > 1 ? shorForm + "s" : shorForm;
    return `Task created at ${value} ${_shortForm} ago `;
  }
};

export default utils;
