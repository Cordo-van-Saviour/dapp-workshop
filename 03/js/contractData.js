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
  address: '0x5160207b04b7884C611bd5D63467D186BC9a0432'
};
