console.log("first person enters");
console.log("second person enters");

const thirdPersonTicket = async () => {
  let ticketArrival = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 1000);
  });
  let thirdPersonTicketCheck = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("completed");
    }, 5000);
  });

  let buySomeFoodBeforeMovie = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });

  let ticket = await ticketArrival;

  let [ticketCheck, food] = await Promise.all([
    thirdPersonTicketCheck,
    buySomeFoodBeforeMovie,
  ]);

  console.log(`${ticketCheck}, ${food}`);
  return ticket;
};

thirdPersonTicket().then((m) => {
  console.log(`Third person shows ${m} and enters.`);
});

console.log("fourth person enters");
console.log("fifth person enters");
