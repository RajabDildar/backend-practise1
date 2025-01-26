const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

//using faker to generate info
const getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// console.log(getRandomUser());

//creating connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "inboxing88",
});

//To use in bash terminal, use this command and enter password:  "/c/Program Files/MySQL/MySQL Server 8.0/bin/mysql.exe" -u root -p

/* let q = "SHOW TABLES";
try {
  connection.query(q, (err, result) => {
    if (err) throw err;
    console.log(result); //result is an array
    console.log(result.length);
    console.log(result[0]);
    console.log(result[1]);
  });
} catch (error) {
  console.log(error);
} */

//when we have to enter data dynamically, we use placeholders (question mark: ?) and after passing q, we write another parameter in array which gives values. i.e, in this case, [user].
let q = "INSERT INTO user(id, username, email, password) VALUES ?";
/* let user = [
  [101, "user1", "user1@gmail.com", "abc1"],
  [102, "user2", "user2@gmail.com", "abc2"],
]; // creating array of arrays to enter data manually

try {
  connection.query(q, [user], (err, result) => {
    if (err) throw err;
    console.log(result); //result is an array
  });
} catch (error) {
  console.log(error);
} */

let data = [];

for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser());
} //entering data dynamically in bulk

try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result); //result is an array
  });
} catch (error) {
  console.log(error);
}

connection.end(); //closes the connection
