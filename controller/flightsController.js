const data = {
    flights: require('../model/flights.json')
};
  
const searchFlights =  (req, res) => {
    const { Source, Destination, Date } = req.body;
  
    if(!Source || !Destination || !Date) return res.status(400).json({"message":"Source, Destination and Date are required"});
  
    const searchedFlights = data.flights.filter((element) => 
      (element.Source === req.body.Source && element.Destination === req.body.Destination && element.Date === req.body.Date));
    
    if (!searchedFlights.length) return res.status(200).json({"message": "No Flights Found!"})
      
    const filteredResults = {}
    for(const key of searchedFlights) {
      filteredResults[key.Name] = key.Price
    }
    res.status(200).json(filteredResults);
};

module.exports = { searchFlights }