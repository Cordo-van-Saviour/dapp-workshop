window.addEventListener('load', function() {
  
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    
    // Use the browser's ethereum provider
    var provider = web3.currentProvider;
    
  } else {
    document.getElementById('warning').style.display = 'block';
  }
  
});

function sendEmail(data) {
  console.log('Sent!');
  console.log(data.to.value);
  console.log(data.subject.value);
  console.log(data.message.value);
}
