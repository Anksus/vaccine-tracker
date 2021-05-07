const Axios = require("axios");
const CronJob = require("cron").CronJob;
const findAvailableVaccine = require("./findAvialableVaccine");

const scheduleJob = (ageGroup, district_id) => {
  const job = new CronJob("0 */1 * * * *", function () {
    const date = new Date()
      .toISOString("en-IN")
      .replace(/T.*/, "")
      .split("-")
      .reverse()
      .join("-");
    Axios.get(
      "https://www.cowin.gov.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" +
        district_id +
        "&date=" +
        date
    ).then((res) => {
      findAvailableVaccine(res.data.centers, ageGroup);
    });
  });

  job.start();
};

module.exports = scheduleJob;
