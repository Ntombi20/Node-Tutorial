// a empty user list
var users = [];

//create 3 users in the users array
//using code like this: users.push({ first_name : 'Andy', last_name : 'Bradshaw' });

//Create 3 users : Jack, Callum and Neil - they all should have the name Bradshaw
users.push({ first_name : 'Jack', last_name : 'Bradshaw' });
users.push({ first_name : 'Callum', last_name : 'Bradshaw' });
users.push({ first_name : 'Neil', last_name : 'Bradshaw' });

//now loop through the users array and write the following data to the console below each other for each user
//you can use the forEach method
users.forEach(function() {users});
//Hi, first_name last_name!
console.log("Hi," + " " + users[0].first_name + " " +users[0].last_name+ "!");
console.log("Hi," + " " + users[1].first_name + " " +users[1].last_name+ "!");
console.log("Hi," + " " + users[2].first_name + " " +users[2].last_name+ "!");
