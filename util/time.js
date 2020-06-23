var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'Europe/Moscow',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};
var hourOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timezone: 'Europe/Moscow',
};

var dayOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timezone: 'Europe/Moscow',
}

module.exports = {
    options,
    dayOptions,
    hourOptions
}