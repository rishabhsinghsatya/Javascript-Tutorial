//arguments is a reserved keyword in javascript
function information(name, language) {
  console.log(arguments); // [Arguments] { '0': 'javascript', '1': 'programming language' }
}
information("javascript", "programming language");


//arguments keyword only provide by function context execution(FCE)
function information(name, language) {
}
console.log(arguments); // 
information("javascript", "programming language");