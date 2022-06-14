const { getAllLaunches } =  require('../../models/launches.model')

function httpGetAllLaunches(req, res){
    // launches.values() is used to get the list of map objects
    return res.status(200).json(getAllLaunches())
}

module.exports = {
    httpGetAllLaunches,
}