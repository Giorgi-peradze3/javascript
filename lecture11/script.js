// // test 1 ღილაკზე დაწერის შემდეგ, test 1 div-ს ქვეშ გაmოiტანეთ ახალი დივი
// // test 2 ზე დაჭერის შემდეგ წაშალეთ ყველა

// var but1 = document.getElementsByClassName("controls")[0].children[0]
// var but2 = document.getElementsByClassName("controls")[0].children[1]
// but1.addEventListener("click", function(){
//     var test = document.getElementsByClassName("test")[0] // dont forget for [0] its his location

//     // create what we need to add in that case its new div
//     var new_div = document.createElement("div")
    
//     new_div.classList.add("new")


//     test.after(new_div)
   
//     console.log(test)
// })

// but2.addEventListener("click", function(){
//     var test = document.getElementsByClassName("test")[0]

//     test.nextSibling.remove()
    

    
// })

//ღილაკი 1 (დამატება): მასზე დაჭერისას, აიღე ინპუტში ჩაწერილი ტექსტი, შექმენი ახალი <li> ელემენტი ამ ტექსტით და ჩასვი <ul> სიის შიგნით. 
//ღილაკი 2 (ყველას წაშლა): მასზე დაჭერისას, წაშალე სიიდან (<ul>-დან) ყველა დამატებული ელემენტი ერთიანად.

var addBtn = document.getElementsByClassName("add-btn")[0];
var clearBtn = document.getElementsByClassName("clear-btn")[0];
var element = document.getElementsByClassName("task-list")[0]
var tsk = document.getElementsByClassName("taskInput")[0]
addBtn.addEventListener("click", function(){
    var inside = tsk.value

    var new_li = document.createElement("li")
    new_li.textContent = inside;

    element.appendChild(new_li);


})

clearBtn.addEventListener("click", function(){

    element.remove()



})


// function test1(){
//     var but1 = document.getElementsByClassName("controls")[0]
//     but1 = but1.children[0]
//     console.log(but1)

//     console.log(document.getElementsByClassName("controls")[0].children[0])
  
//     // var t = getElementByClassName("test");
//     // var a = getElementByClassName("controls")
//     // t.getElementsByClassName("test").createElement("div").style.height = "20px";
//     // a = document.getElementsByClassName("test").createElement("div").style.width = "50px";
//     // a = document.getElementsByClassName("test").createElement("div").style.background = "blue";

// }

// test1()


