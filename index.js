function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === lowerCase.toLowerCase()) {
    return lowerCase
  } else if (string === upperCase.toUpperCase()) {
    return upperCase
  }

}
var lowerCase = 'I can\'t hear you!'
  
lowerCase.toLowerCase() === lowerCase; 

var upperCase = 'YES INDEED!'
  
upperCase.toUpperCase() === upperCase; 
  
var mixedCase = 'I love you, too.'
  
mixedCase.toLowerCase() === mixedCase;

mixedCase.toUpperCase() === mixedCase;