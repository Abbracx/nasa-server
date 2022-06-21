const launches = new Map();

latestFlightNumber = 100;


const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(
        launch,
        {   
            success: true,
            upcoming: true,
            customers: ['Zero To Mastery', 'NASA'], 
            flightNumber: latestFlightNumber 
        }
    ));
}
function getAllLaunches(){
    return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};