//task 1
// function f1(x){
//     return Math.ceil(x);
// }

// console.log(f1(12.76))


//task 2
// function f2(x){
//     return Math.round(x);
// }
// console.log(f2(13.26))

//task 3
//  function f3(x){
//      return Math.round(x);
// }
//  console.log(f3(12.5))


//task 4
// function f4(x,y){
//     if(y>x){
//         return Math.ceil(x)
//     }else(x < y){
//         return Math.round(x)
//     }


// }

// console.log(f4(x,y))


//task 5
//  function f5(){
//     
//     t = Math.random()
//     if(t < 0.1){
//         r = 1
//     }else{
//         r = Math.random()
//     }
//  }

//  console.log(f5(r))

//task 6
// function f6(){
//     return Math.floor(Math.random() * 50) + 5;
//  }

//  console.log(f6())
 

//task 7
// function f7(x,y){
//    t = math.random()
//   if(t < 0.1){
//     r = 1
//   }else{
//     r = Math.random()
//   }
// }

// console.log(f7(x,y))

//task 8

//  function f8(x,y){
    
//         return Math.floor(Math.random() * x) + y;
    
    
//  }

//  console.log(f8(x,y))

//task 9

// function f9(x,y){
    
//     for (let i = 0; i < 10; i++){

//         console.log(Math.floor(Math.random() * x) + y); 
//     }
    

// }

// f9(13, 1)

//task 10

// function f10(n,x,y){

//     for(let i = 0; i < n; i++){
//         console.log(Math.floor(Math.random() * (y - x + 1)) + x)
//     }


// }

// f10(3,1,10)

//task 11

// function f11(){

//     const  arr = ["monday", "tuesday", "wednesday", "thurstday", "friday", "saturday", "sunday"] 

//     const random = Math.floor(Math.random() * arr.length);

//     return arr[random]

// }

// console.log(f11())

//task 12

// function f12(){

//     const  arr = [document.getElementById("myImg"), document.getElementById("myImg"), document.getElementById("myImg"), document.getElementById("myImg"), document.getElementById("myImg"), document.getElementById("myImg"), document.getElementById("myImg") ] 

//     const random = Math.floor(Math.random() * arr.length);

//     return arr[random]

// }

// console.log(f12())

// task 13

// function f13(){

//     const  arr = [document.getElementById("myImg"), document.getElementById("myImg"), document.getElementById("myImg"), document.getElementById("myImg"), document.getElementById("myImg"), document.getElementById("myImg"), document.getElementById("myImg") ] 

//     
//     for(let i = 0; i < 4; i++){
//       const random = Math.floor(Math.random() * arr.length);
//         console.log(arr[random])
//     }
// }

// f13()

// task 19 ??

// function f19(r, c, p) {
//     let table = `<table border="1" style="border-collapse: collapse; text-align: center;">`;
//     let photos = 0;

//     for (let i = 0; i < r; i++) {
//         table += `<tr>`; 
        
//         for (let j = 0; j < c; j++) {
//             table += `<td style="width: 110px; height: 110px;">`;
            
           
//             if (photos < p) {
//                 table += `<img src="${photos}" />`;
//                 photos++;
//             }
            
//             table += `</td>`;
//         }
        
//         table += `</tr>`; 
//     }

//     table += `</table>`;
//     document.write(table);
// }