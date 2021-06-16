console.log("first person enters");
console.log("second person enters");

const thirdPersonTicket = async () => {
  let ticketArrival = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ticket");
    }, 1000);
  });

  let ticket;
  try {
    ticket = await ticketArrival;
  } catch (e) {
    ticket = "sad face";
  }

  return ticket;
};

thirdPersonTicket().then((m) => {
  console.log(`Third person shows ${m}.`);
});

console.log("fourth person enters");
console.log("fifth person enters");
