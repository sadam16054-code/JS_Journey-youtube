const accountId = 144553
let accountEmail = "sadam@gmail.com"
var accountPassward = "12345"
accountCity = "Malakand"
let accountState;
//accountId = 2 // Not allowed

accountEmail = "hchc@gmail.com"
accountPassward = "212121"
accountCity = "Mardan"

console.log(accountId);

console.table([accountId,accountEmail,accountPassward,accountCity,accountState])
/*
prefer not to use var
because of issue in block scope and functional scope
*/