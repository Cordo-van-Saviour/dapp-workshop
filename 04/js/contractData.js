contractData = {
  abi: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "subject",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "message",
          "type": "bytes"
        }
      ],
      "name": "Message",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "recipient",
          "type": "address"
        },
        {
          "name": "subject",
          "type": "bytes"
        },
        {
          "name": "message",
          "type": "bytes"
        }
      ],
      "name": "send",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  address: '0xcB61e22d6440276aE45CA34f824efD1545fB947c'
};
