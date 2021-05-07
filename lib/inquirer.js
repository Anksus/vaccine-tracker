const inquirer = require("inquirer");
const Axios = require("axios");
const scheduleJob = require("./scheduleJob");

module.exports = {
  askStateAndDistrict: () => {
    Axios.get("https://www.cowin.gov.in/api/v2/admin/location/states")
      .then((response) => {
        const states = response.data.states.map((ele) => {
          return ele.state_name;
        });
        inquirer
          .prompt([
            {
              type: "list",
              name: "reptile",
              message: "Which state?",
              choices: states,
            },
          ])
          .then((selected_state) => {
            const state_data = response.data.states.filter(
              (data) => data.state_name === selected_state.reptile
            );

            Axios.get(
              "https://www.cowin.gov.in/api/v2/admin/location/districts/" +
                state_data[0].state_id
            ).then((res) => {
              const districts = res.data.districts.map(
                (data) => data.district_name
              );

              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "reptile",
                    message: "Which district?",
                    choices: districts,
                  },
                ])
                .then((selected_district) => {
                    const district_data = res.data.districts.filter(
                    (data) => data.district_name === selected_district.reptile
                  );
                  inquirer
                    .prompt([
                      {
                        type: "list",
                        name: "reptile",
                        message: "Age group?",
                        choices: ["18-44", "45+"],
                      },
                    ])
                    .then((ageGroup) => {
                      scheduleJob(
                        ageGroup.reptile,
                        district_data[0].district_id
                      );
                    }).catch((error)=>{
                      console.log(error)
                    })
                });
            });
          })
          .catch((error) => {
            if (error.isTtyError) {
              console.log(error.isTtyError);
            } else {
              console.log(error);
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
