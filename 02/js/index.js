window.addEventListener('load', function() {
  
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    
    // Use the browser's ethereum provider
    var provider = web3.currentProvider;
    
  } else {
    document.getElementById('warning').style.display = 'block';
  }
  
});

var abi = contractData.abi;
const address = contractData.address;

var MailboxContract = web3.eth.contract(abi);
var contractInstance = MailboxContract.at(address);

function sendEmail(data) {
  console.log('Sent!');
  console.log(data.to.value);
  console.log(data.subject.value);
  console.log(data.message.value);
  
  contractInstance.send(data.to.value, data.subject.value, data.message.value, handleContract);
}

function handleContract(err, res) {
  if (err) {
    throw err;
  }
  
  console.log(res);
}

var event = contractInstance.Message({}, {fromBlock: 9025200, toBlock: 'latest'});

event.watch(function(err, res) {
  if (err) {
    alert(err);
  }
  
  // Pick
  if (res.event === 'Message') {
    // We can log it at first
    console.log('blockHash ', res.blockHash);
    console.log('blockNumber ', res.blockNumber);
    console.log('event ', res.event);
    console.log('to ', res.args.recipient);
    console.log('message ', web3.toAscii(res.args.message));
    
    var message;
    message = web3.toAscii(res.args.message);
    
    appendData();
    
    function appendData() {
      // Then we can use jQuery to display those messages
      $('table>tbody').append(
        '<tr> <td>' + res.args.owner + '</td> <td>' + web3.toAscii(res.args.subject) + '</td> <td>' +
        message + '</td> <td>' + res.transactionHash + '</td> </tr>');
    }
  }
});
