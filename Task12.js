let balance = Number(prompt("Enter Current Balance:"));
let withdraw = Number(prompt("Enter Withdraw Amount:"));

if (withdraw <= balance) {
    let remaining = balance - withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance : " + remaining);
} else {
    console.log("Insufficient Balance");
}