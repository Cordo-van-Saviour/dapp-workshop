ipfs = new window.Ipfs();

if (!('TextEncoder' in window))
  alert('Sorry, this browser does not support TextEncoder...');

textEncoder = new TextEncoder(); // always utf-8

encodeStringToBuffer = function(string) {
  return textEncoder.encode(string);
};

if (!('TextDecoder' in window))
  alert('Sorry, this browser does not support TextDecoder...');

textDecoder = new TextDecoder('utf-8');

encodeBufferToString = function(uint8array) {
  return textDecoder.decode(uint8array);
};
