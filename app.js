function getCounts(string){
    const count ={};
for(let i in string)
    count[string[i]]= (count[string[i]] || 0) +1
return count;
}
console.log(getCounts("hello"));
module.exports = getCounts;