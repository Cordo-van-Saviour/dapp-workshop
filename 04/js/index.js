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

$('form').submit(function(e) {
  e.preventDefault();
});

function sendEmail(data) {
  addDataToIPFS(data, data.message.value);
  
  console.log('Sent!');
  console.log(data.to.value);
  console.log(data.subject.value);
  console.log(data.message.value);
}

function addDataToIPFS(data, message) {
  
  var buffer = window.buffer.Buffer.from(message, 'utf8');
  
  var file = {
    path: '/tmp/myfile.txt',
    content: buffer
  };
  
  ipfs.files.add(file, function(err, res) {
    if (err) {
      throw err;
    }
    
    emailContract.send(data.to.value, data.subject.value, res[1].hash, handleResponse);
  });
}



function handleResponse(err, res) {
  if (err) {
    throw err;
  }
  
  alert(res);
}

var event = emailContract.Message({}, {fromBlock: 9025200, toBlock: 'latest'});

event.watch(function(err, res) {
  if (err) {
    alert(err);
  }
  
  // Pick
  if (res.event === 'Message' && res.args.recipient === web3.eth.accounts[0]) {
    // We can log it at first
    
    var message;
    
    ipfs.files.cat(web3.toAscii(res.args.message), function(err, ipfsResponse) {
      if (err) {
        console.log('err')
      }
      
      message = ipfsResponse;
      return appendData();
    });
    
    function appendData() {
      // Then we can use jQuery to display those messages
      $('table>tbody').append(
        '<tr> <td>' + res.args.owner + '</td> <td>' + web3.toAscii(res.args.subject) + '</td> <td>' +
        message + '</td> <td>' + res.transactionHash + '</td> </tr>');
    }
  }
});
