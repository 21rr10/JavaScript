let username=prompt("Enter you username");
let len=username.length;
let str1="@"
username= (str1.concat(username)).concat(len);
// username=username.concat(len);
console.log(username);