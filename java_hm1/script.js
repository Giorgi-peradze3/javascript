// task 1

// function pract1_1(text){
//     document.writeln(`<div class = "pr1-1">${text}</div>`)
// }

// pract1_1("european uni")

//task 2

// function f2(){
    
//     x = 12
//     y = 13
//     c = x + y

//     return c;
// }

//task 3

// function  pract1_3(t, s){
//     document.writeln(`<div style = "font-size:${s}px">${t}</div>`)
// }


// pract1_3("hello dear students",22)

//task 4

// function table1(w){
//     document.writeln(`<table border="1" style="width: ${w}px; border-collapse: collapse; text-align: center;"><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>`);
// }

// table(157)

// task 5

// function table2(h){
//     document.writeln(`<table border="1" style="height: ${h}px; border-collapse: collapse; text-align: center;"><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>`);
// }

// table(157)

//task 6

// function table3(w,h){
//     document.writeln(`<table border="1" style="height: ${h}px; width: ${w}px; border-collapse: collapse; text-align: center;"><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>`);
// }

// table(157,57)

//task 7

// function table4(w,h,c){
//     document.writeln(`<table border="1" style="height: ${h}px; width: ${w}px; background-color:${c}; border-collapse: collapse; text-align: center;"><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>`);
// }

// table(157,57,green)

//task 8

// function table4(w,h,c,b){
//     document.writeln(`<table border="${b}" style="height: ${h}px; width: ${w}px; background-color:${c}; border-collapse: collapse; text-align: center;"><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>`);
// }

// table(157,57,green,5)

//task 9

// function table4(w,h,c,b){
//     document.writeln(`<table border="${b}" style="height: ${h}px; width: ${w}px; background-color:${c}; border-collapse: collapse; text-align: center;"><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>`);
// }

// table(157,57,green,5)

//task 10

// function table4(w,h,c,b){
//     document.writeln(`<table border="${b}" style="height: ${h}px; width: ${w}px; background-color:${c}; border-collapse: collapse; text-align: center;"><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>`);
// }

// table(157,57,green,5)

//task 11

// function num(){

//     for(i = 1; i < 10; i++){
//         document.writeln(i);

        
//     }

// }

// num();

//task 12

// function num(n){

//     for(i = 1; i < n; i++){
//         document.writeln(i + "<br>");

        
//     }

// }

// num(12);

//task 13

// function num(m,n){

//     for(i = m; i < n; i++){
//         document.writeln(i + "<br>");

        
//     }

// }

// num(12,100);

//task 14

// function num(m,n){

//     if(m < n){
//         for(i = m; i < n; i++){
//             document.writeln(i + "<br>");
//         }
//     }else{
//         for(i = n; i < m; i++){
//             document.writeln(i + "<br>");
//         }
//     }
    

// }

//  num(12,100);

// task 15

// function c_table(rows, colms) {
    
//     document.writeln('<table border="3" style="width: 50%; border-collapse: collapse; text-align: center;">');

    
//     for (i = 1; i <= rows; i++) {
//          
//         for (n = 1; n <= colms; n++) {
//            
//         }
//         
//     }
//     
// }
// ??


// c_table(5, 4);

// task 16 

// function c_table(rows, colms) {
    
//     document.writeln('<table border="3" style="width: 50%; border-collapse: collapse; text-align: center;">');

    
//     for (i = 1; i <= rows; i++) {
//         document.writeln('<tr>');

       
//         for (n = 1; n <= colms; n++) {
//             document.writeln(`<td>${i}_${n}</td>`);
//         }

//         document.writeln('</tr>');
//     }

//     document.writeln('</table>');
// }


// c_table(5, 4);

// task 17

// function c_table(rows, colms,w,h,c,b) {
    
//     document.writeln('<table border="${b}" style="height: ${h}px; width: ${w}px; background-color:${c}; border-collapse: collapse; text-align: center;">');

    
//     for (i = 1; i <= rows; i++) {
//         document.writeln('<tr>');

       
//         for (n = 1; n <= colms; n++) {
//             document.writeln(`<td>${i}_${n}</td>`);
//         }

//         document.writeln('</tr>');
//     }

//     document.writeln('</table>');
// }


// c_table(5, 4,500,100,black,5);