var beep = require("beepbeep");

const findAvailableVaccine = (data, ageGroup) => {
  const age = parseInt(ageGroup.substr(0, 2));
  var availableVaccnice = [];
  data.forEach((center) => {
    center.sessions.forEach((session) => {
      if (
        parseInt(session.available_capacity) > 0 &&
        session.min_age_limit === age
      ) {
        availableVaccnice.push({
          name: center.name,
          session: session.date,
          available_capacity: session.available_capacity,
        });
      }
    });
  });

  if (availableVaccnice.length) {
    console.log(availableVaccnice);
    beep(10, 100);
  } else {
    console.log("No appointments available");
  }
};

module.exports = findAvailableVaccine;
