console.log("first person enters");
console.log("second person enters");

const thirdPersonTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 3000);
});

const thirdPersonTicketCheck = thirdPersonTicket.then((t) => {
  console.log(`${t} received`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${t}, and checked ticket`);
    }, 3000);
  });
});

thirdPersonTicketCheck.then((x) => {
  console.log(`${x}`);
  console.log("Third person ticket check completed");
});

console.log("fourth person enters");
console.log("fifth person enters");
