let passengers = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]

var number = function(busStops){
  // Good Luck!
  let initialPassengers = busStops[0][0]
  let sumArray = []

  for (let i = 1; i < busStops.length; i++){
    let diff = busStops[i][0] - busStops[i][1]
    sumArray.push(diff)
  }

  let arrSum = sumArray.reduce((a, b) => a + b, 0)
  return initialPassengers + arrSum

}

number(passengers)