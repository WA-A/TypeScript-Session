let UserName:string='WA-A';
let UserAge:number=21;
let Bothers:string[]=['Yazan','Aws','Bara'];
let BAge:number[]=[29,27,25];
let test:[number|string]=[3]; // This means that it accepts a number or a string
let data:any; // This means that it accepts any type of data
let users:any[]; // This means that it array accepts any type of data


interface User{
    name:string,
    age:number,
    sayHello():string,
}

let user:User  = {
    name:"Wasan",
    age : 21,
    sayHello:()=> {
        return "hello";
    }


}
console.log(user.name);

//Generic : same Template in c++
function getData<T>(names:T[]):T[]{
    return names;
}
let data1:string[]=["Ansam","Wasan"];
let data2:number[]=[26,21];

console.log(getData<string>(data1));
console.log(getData<number>(data2));
