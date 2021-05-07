const findAvailableVaccine = (data, ageGroup) => {
  //   console.log(data);
  const age = parseInt(ageGroup.substr(0, 2));
  const ageGroupData = data.map((center) => {
    const sessions_ = center.sessions.map((session) => {
      console.log(session.available_capacity, age, session.min_age_limit);
      if (age === session.min_age_limit && session.available_capacity != 0) {
        console.log("ewe got");
        return {
          available_capacity: session.available_capacity,
          date: session.date,
        };
      }
    });
    return {
      name: center.name,
      sessions: sessions_,
    };
  });
  if (!ageGroupData[0].sessions) {
    console.log("Nothing there");
  } else {
    console.log(ageGroupData);
  }
  //   console.log("hello");
};

module.exports = findAvailableVaccine;
