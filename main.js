var UserName = 'WA-A';
var UserAge = 21;
var Bothers = ['Yazan', 'Aws', 'Bara'];
var BAge = [29, 27, 25];
var test = [3]; // This means that it accepts a number or a string
var data; // This means that it accepts any type of data
var users; // This means that it array accepts any type of data
var user = {
    name: "Wasan",
    age: 21,
    sayHello: function () {
        return "hello";
    }
};
console.log(user.name);
//Generic : same Template in c++
function getData(names) {
    return names;
}
var data1 = ["Ansam", "Wasan"];
var data2 = [26, 21];
console.log(getData(data1));
console.log(getData(data2));
