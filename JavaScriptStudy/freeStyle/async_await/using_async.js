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
    }, 10000);
  });
  let ticket = await ticketArrival;

  console.log(`${ticket} arrived`);

  let ticketCheck = await thirdPersonTicketCheck;

  console.log(`ticket check ${ticketCheck}`);

  return ticket;
};

thirdPersonTicket().then((m) => {
  console.log(`Third person shows ${m} and enters.`);
});

console.log("fourth person enters");
console.log("fifth person enters");

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Async function returns a promise ! $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
