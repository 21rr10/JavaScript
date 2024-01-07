let companies=["BloomBerg","Microsoft","Uber","Google","IBM","Netflix"];
// to remove the first element from the array
console.log(companies.shift(),"\n",companies);

//removing Uber abd adding ola in its place
console.log(companies.splice(1,1,"ola"),companies);

//add amazon at end
console.log(companies.push("Amazon"),companies);

