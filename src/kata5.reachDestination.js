const reachDestination = (distance, speed) => {
    const time = distance / speed;
    const formattedTime = time.toFixed(0);
    return `I should be there in ${formattedTime} hours.`;
  };
  
module.exports = reachDestination;
