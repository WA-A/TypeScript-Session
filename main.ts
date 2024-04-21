let UserName:string='WA-A';
let UserAge:number=21;
let Bothers:string[]=['Yazan','Aws','Bara'];
let BAge:number[]=[29,27,25];
let test:[number|string]=[3]; // This means that it accepts a number or a string
let data:any; // This means that it accepts any type of data
let users:any[]; // This means that it array accepts any type of data


interface User{ // include the readonly and make extended in another interface
   readonly name:string, // no change to value
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

type person ={
    name:string,
    age:number,
    sayHello():string,
    title?:string
}


let user2:person  = {
    name:"Wasan Awwad",
    age : 21,
    sayHello:()=> {
        return "hello";
    }
}

console.log(user2?.title);

interface persondata extends Omit<User,'age'>{} // age in User not persondata --> means get all but without age 


interface personData extends Pick<User,'age'>{} //  means just need age 


interface persondata2 extends Partial<User>{} //  means the all is optional 


// enum
enum Gender{
    Male='male',
    Female ='Female'
}

if (Gender.Female)
    enum roles{
Admin='admin'
}
roles.Admin


//Generic : same Template in c++
function getData<T>(names:T[]):T[]{
    return names;
}
let data1:string[]=["Ansam","Wasan"];
let data2:number[]=[26,21];

console.log(getData<string>(data1));
console.log(getData<number>(data2));
