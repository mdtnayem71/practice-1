
const userInfo = {
    id:1,
    name:{
        firstName:"tasdid",
        lastName:"Nayem"
    },
    favoriteColor:"black"
}
const {id,name:{firstName,lastName},favoriteColor}= userInfo
console.log(firstName);

// Array 
const friends = ["Karim","Rahim","Mahim"]
const [,b,]=friends;
console.log(b);