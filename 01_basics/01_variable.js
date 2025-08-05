const accountId = 144553
let accountEmail = "abhishek@google.com"
var accountPassword = "1234"
accountCity = "New Delhi"
let accountState;

// accountId = 2 not allowed


accountEmail = "a@gmail.com"
accountPassword = "12312"
accountCity = "himanchal"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])