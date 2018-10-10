window.addEventListener('load', function() {
  
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    
    // Use the browser's ethereum provider
    var provider = web3.currentProvider;
    
  } else {
    document.getElementById('warning').style.display = 'block';
  }
  
});

var contract = web3.eth.contract(contractData.abi);
var emailContract = contract.at(contractData.address);

function sendEmail(data) {
  emailContract.send(data.to.value, data.subject.value, data.message.value, handleResponse);
  
  console.log('Sent!');
  console.log(data.to.value);
  console.log(data.subject.value);
  console.log(data.message.value);
}

function handleResponse(err, res) {
  console.log(err, res);
}

var event = emailContract.Message({}, {fromBlock: 9025200, toBlock: 'latest'});

event.watch(function(err, res) {
  if (err) {
    alert(err);
  }
  
  console.log(JSON.stringify(res));
});
