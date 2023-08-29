
var person = {
    firstName: "Lalithesh Sai Balu",
    lastName: "Mopidevi",
    age: 25,
    city: "Vijayawada",
    profession: "Electronics and communications Engineer"
};

console.log("Read - First Name:", person.firstName);
console.log("Read - Age:", person.age);

person.age = 20;
person.city = "Machilipatnam";
console.log("Update - New Age:", person.age);
console.log("Update - New City:", person.city);


person.email = "laliteshsai@gmail.com";
console.log("Create - New Email:", person.email);


delete person.profession;
console.log("Delete - Profession:", person.profession);


console.log("Final Object:", person);
