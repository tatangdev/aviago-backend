const {isValidYear, isValidMonth, getDatesOfMonth} = require('./src/utils/moment');

const year = Number(process.argv[2]);
const month = Number(process.argv[3]) - 1;

if (!isValidYear(year)) {
    console.log('Year input is not valid!');
    return;
}

if (!isValidMonth(month)) {
    console.log('Month input is not valid!');
    return;
}

const datesOfMonth = getDatesOfMonth(year, month);

// Output the dates
datesOfMonth.forEach((date) => {
    console.log(date);
});

