function addNormal(num1:number,num2:number):number{
    const result = num1+num2;
    return result;
}
// console.log(addNormal(5,6));
const addArrow =(num1:number,num2:number):number=>{
    return num1+num2
}
console.log(addArrow(1,1));
// Object Function Method 
const poorUser={
    balance:0,
    addBalance(value:number):number{
        this.balance= this.balance+value;
        return this.balance;
    }
}
poorUser.addBalance(1000)
console.log(poorUser);

// Loop callback function
const arr:number[]=[1,4,5,6]
const squareArr = arr.map((elem:number):number=>elem*elem)
console.log(squareArr);