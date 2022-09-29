const mongoose = require("mongoose");
const User = require("./users");

mongoose.connect('mongodb://localhost:27017/testdb');

// let usrname = document.getElementById('usrName').value
// let usrage = document.getElementById('usrAge').value
// let mail = document.getElementById('usrMail').value
// let usrhobbies = document.getElementById('usrHobbies').value
// let str = document.getElementById('usrStreet').value
// let City = document.getElementById('usrCity').value


 
async function run(){
    try {

        const user = await User.create({
            name: "usrname", 
            age: "usrage", 
            email: "mail",
            hobbies: ["usrhobbies"],
            address: {
                street: "str",
                city: "City"
            },
        })
        await user.save()
        console.log(user)
    }
    catch (e){
        
        console.log(e.message)
    }
}
