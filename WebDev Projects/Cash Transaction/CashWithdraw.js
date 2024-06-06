function cashWithdrawal() {
    // Get user input values
    let amount = document.getElementById("amount").value;
    let paymentMode = document.getElementById("payment_mode").value;
  
    // Validate input
    if (!amount || isNaN(amount) || !paymentMode) {
      alert("Please enter a valid amount and select a payment mode.");
      return;
    }
  
    // Convert amount to a number
    amount = parseFloat(amount);
  
    // Define withdrawal limits using a lookup table (assuming these values are stored elsewhere)
    const withdrawalLimits = {
      UPI: 90000,
      ATM: 50000,
      Cash: 10000,
    };
  
    // Check withdrawal limit based on payment mode
    if (amount > withdrawalLimits[paymentMode]) {
      alert(`Insufficient balance for ${paymentMode}. Maximum withdrawal limit is ₹${withdrawalLimits[paymentMode]}.`);
    } else {
      alert(`Your transaction of ₹${amount} via ${paymentMode} is successful!`);
    }
  }
  
  cashWithdrawal();
  