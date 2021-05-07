var beep = require('beepbeep')


const findAvailableVaccine = (data, ageGroup) => {
  //   console.log(data);
  const age = parseInt(ageGroup.substr(0, 2));
  // console.log(data);
  var availableVaccnice = [];
  data.forEach(center=>{
    center.sessions.forEach(session=>{
      // console.log(session.available_capacity,session.min_age_limit)
      if(parseInt(session.available_capacity)>0 && (session.min_age_limit)===age){
        availableVaccnice.push({
          name: center.name,
          session:session.date,
          available_capacity:session.available_capacity
        })
      }
    })
  })

  if(availableVaccnice.length){
    console.log(availableVaccnice);
    beep(5,1000);
  }else{
    console.log("No appointments available")
  }
 
};

module.exports = findAvailableVaccine;
