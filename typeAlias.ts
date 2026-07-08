type User = {
    id:number,
    name:string,
    gender:"male"|"Female",
    contactNo:string
}
const user1:User={
    id:10,
    name:"Tasdid",
    gender:'male',
    contactNo:"01732862871"
}
const user2:User={
    id:3,
    name:"Nayem",
    gender:"male",
    contactNo:"01913598200"
}

// Function 
type AddFunc = (num1:number,num2:number)=>number;
const add:AddFunc =(num1,num2)=>num1+num2
// Union
type UserRole = "Admin" |"User"
const getDashboard = (role:UserRole)=>{
    if(role==='Admin'){
        return "Admin Dashboard"
    }
    else if(role === "User"){
        return "User Dashboard"
    }
    else{
        return "Guest Dashboard"
    }
}
console.log(getDashboard("Admin"));

// Intersection 
type Employee = {
    id:string;
    name:string;
    phoneNumber:string
}
type Manager = {
    designation:string,
    teamSize:number;
}
type EmployeeManager = Employee & Manager

// Ternary 
const biyerJonnoElegible = (age:number)=>{
    const result = age>=21 ? "You are Eligible"
    :
    "You are not Eligible"
    return result
}
console.log(biyerJonnoElegible(20));