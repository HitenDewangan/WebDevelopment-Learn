// function cash_Withdrawal(){
//     console.log("Enter amount: ");
//     let amount = document.getElementById("amount").value;
//     console.log("Enter amount: ");
//     let payment_mode = document.getElementById("payment_mode").value;

const { log } = require("console");

//     if(payment_mode == "UPI"){
//         if(amount <= 90000){
//             alert("Your Transaction is Successfull");
//         } else{
//             alert("Insufficient Balance");
//         }
//     }
//     else if(payment_mode == "ATM"){
//         if(amount <= 50000){
//             alert("Your Transaction is Successfull");
//         } else{
//             alert("Insufficient Balance");
//         }
//     }
//     else if(payment_mode == "Cash"){
//         if(amount <= 10000){
//             alert("Your Transaction is Successfull");
//         } else{
//             alert("Insufficient Balance");
//         }
//     }
// }

// cash_Withdrawal();

const withdrawalLimits = {
    UPI: 90000,
    ATM: 50000,
    Cash: 10000,
  };
function cashWithdrawal(amount, paymentMode) {
    if (!amount || isNaN(amount) || !paymentMode) {
      alert("Please enter a valid amount and select a payment mode.");
      return;
    } 
    
    if (amount > withdrawalLimits[paymentMode]) {
        console.log(`Insufficient balance for ${paymentMode}. Maximum withdrawal limit is ₹${withdrawalLimits[paymentMode]}.`);
    } else {
        console.log("Amount is: " +amount+"\npayment mode is: " +paymentMode);
        console.log(`Your transaction of ₹${amount} via ${paymentMode} is successful!`);
    }
  }

let Amount = 21339
let payment_mode = "UPI"
cashWithdrawal(Amount, payment_mode);
  