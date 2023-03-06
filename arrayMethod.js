// ////////////
// let arr =["olma","behi","limon","mandarin"];
// console.log(arr);
// delete arr[1];
// delete arr[1];
// console.log(arr);


// let arr1 =["olma","behi","limon","mandarin","banan",5,7,8];
// arr.splice (2,1,"tarvuz");
// console.log(arr);


// //misol
// let arr =["atirgul",7,false,10,"oyna","binafsha","daraxt","olcha","olxori",true];
// arr
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] =="string"&& arr[i][0]=="o") {
//         arr.splice(i,1)
//         console.log(arr);
//     }
    
// }


// let arr =["olma",8,"behi",45,"limon",false,11,"olxori",21,12,];
// let arr2=[];
// for (let i = 0; i < arr.length; i++) {
//    if (typeof arr[i] =="number") {
//    arr2.push(arr[i]);
//    }
// }

//     arr2.sort((a,b) => a-b);
// arr2.reverse();
// console.log(arr2);


// let arr =[1,3,1,4,18,10,36];
// let result = arr.filter((val,inx) => val % 2 == 0 && val % 3 == 0);
// console.log(result);


// let str = "this is a car"
// let a = str.split(" ");
// console.log(a);
// let b = a.join("/")
// console.log(b);


// 4-misol
// let str = "this is my favourite IT Course";
// let str2 = str.split(" ").reverse().join(" ");

// console.log(str2);


// //5-misol
// let arr=["olma","behi","anorlar","limonlar",true,false,"tarvuz",12,16];
// let arr2= arr.filter(val=>typeof val != "number" && val[0] !="o");
// console.log(arr2);


// // 2-misol
// let arr1 =["olma","behi","anorlar","limonlar",true,false,"tarvuz",12,16];
// let a =arr1.map((val,index)=>val+" "+typeof val);
// console.log(a);


// // 3-misol
// let arr2 =["olma","behi","anorlar","limonlar",true,false,"tarvuz",12,16];
// let b =arr2.length((val,inx)=>length==8);
// console.log(b);


// /// includes()
// let a ="this Is A Course";
// console.log(a.includes("Cour"));
// let arr1 =["text","best",1,2,3,4,5];
// console.log(arr1.includes("text"));


// ///reducer
// let arr3 =[1,2,3,,4,5,6];
// let r =arr3.reduce((sum,val,inx,array)=>sum + val,0);
// console.log(r);


// let b = [1,2,3,4,5];
// // let a = b.map((val,inx) => `${val} $ {val % 2 ==1 ? "toq" : "juft"}`);
// let a = b.map((val,inx) => `${val} ${val % 2 == 0 && "juft" || "toq"}`);
// console.log(a);


// //1-misol
// let arr =["test12a","best13b","test14larc","last4d","car9devise","com1pyuter","okay5"];
// let s = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
    
//     if (arr[i][j] * 0 == 0) {
//       s = s +(+arr[i][j]);
//     }
// }
// }
//   console.log(s);



// // let objName = {
// //     name:"Jasur",
// //     adress:"Tashkent",
// //     email:"example@gmail.com",
// //     tel:975632122,
// // }
// // console.log(objName.adress,objName.email);
// // console.log(objName["name"]);


// //Nested object
// let objName ={
// name:"Jasur",
// address:{
// city:"tashkent",
// street:"naqqoshlik",
// },
// email:"example@gmail.com",
// tel:975631222,
// }
// console.log(objName.address.viloyat);


// let arr =[
//     [1,2,3,4,],
//     [2,3,4,6],
//     [45,56,67,0]
// ];
// console.log(arr[2][2]);

// let arr1=[{
// id:1,
// name:"Jasur",
// address:"Tashkent"
// },{
//     id:2,
//     name:"Jamshid",
//     address:{
//     street:"naqqoshlik"
// }
// },{
//     id:3,
//     name:"Botir",
//     address:"jizzax"

// }];

// console.log(arr1[1].address.street);

// let obj={
//     name:'Jasur',
//     address:["toshkent",12],
// }
// console.log(obj.address[1]);


// //object methods
// let user ={
//     name:"jasur",
//     sayHello:function(){
//         console.log(this);
//     },
//     saybye:()=>{
//         console.log(this.name);
//     }
// }
// user.sayHello();
// user.saybye();
// console.log(this);