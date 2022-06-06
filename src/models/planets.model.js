const { parse } = require("csv-parse");
const { on } = require("events");
const fs = require("fs");

/*returns a readable stream and an event emitter which we can react to events from
using the on() function.
*/

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (chunk) => {
    if (isHabitablePlanet(chunk)) habitablePlanet.push(chunk);
  })
  .on("error", (err) => console.log(err))
  .on("end", () => {
    console.log(
      habitablePlanet.map((planet) => {
        return planet["kepler_name"];
      })
    );
    console.log(`${habitablePlanet.length} habitable planets.`);
    console.log("done.");
  });

module.exports =  {
    planets: habitablePlanets
}