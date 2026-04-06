// function example_obj1(){
//     var student = {
//         name: "giorgi",
//         'lastname': "fifia",
//         "age": 19,
//         subjects: ["programing", "computer skilss", "web technologies", "english gyal name fiona"],
//         grades: {programing: 91, computer_skills: 92, web_technlogies: 98},
//         fuLLNAME: function(){
//             console.log(this.name)
//             console.log(this.lastname)
//         }
//     }
//     // console.log(student)
//     // console.log(student.age)
//     // console.log(student.subjects)
//     // console.log(student.subjects[2])
//     // console.log(student.grades)
//     console.log(student.fuLLNAME())
// }

// // example_obj1()

// // ფუნქციის საშუალებით კონტეინერებს გავუკეთოთ სტილი js-დან

// function style(){
//     var containers = document.getElementsByClassName("container")
//     for(let i = 0; i < containers.length; i++){
//         r = Math.floor(Math.random() * 256)
//         g = Math.floor(Math.random() * 256)
//         b = Math.floor(Math.random() * 256)
//         w = Math.floor(Math.random() * 500 + 100)
//         h = Math.floor(Math.random() * 500 + 100)
//         s = Math.floor(Math.random() * 5)
//         containers[i].style.width = `${w}px`
//         containers[i].style.height = `${h}px`
//         containers[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
//         containers[i].style.margin = "10px auto"
//         containers[i].style.border = `solid ${s}px rgb(${r}, ${g}, ${b})`

//         let inside = document.createElement("div") 
//         inside.style.width = "50px"
//         inside.style.height = containers[i].offsetHeight * 80 / 100 + "px"
//         inside.style.backgroundColor = "black"
//         inside.style.margin = "50px auto"

//         containers[i].appendChild(inside)
        
        
//     }
    

    
//     console.log(containers)
// }


// // style()

// function style2(n){
//      style()
//     var containers = document.getElementsByClassName("container")
//     for(let i = 0; i < containers.length; i++){
//         var h = containers[i].offsetHeight
        

//         for(let j = 0; j < n; j++){

//                 let inside = document.createElement("div") 
//                 inside.style.width = "50px"
//                 inside.style.height =  `${h * 80 / 100} + "px"`
//                 inside.style.backgroundColor = "black"
//                 inside.style.margin = "50px auto"

//                 containers[i].appendChild(inside)
                
//         }
       
       
        
//     }
// }

// style2(3)

//kinda calculator
// function calculator(a,b){
     
//     console.log(b * a / 100)
// }

// calculator(77.12,5)

function s(){
    var a = document.getElementsByClassName("d")
    a.style.width = "100px"
    a.style.height = "100px"
    a.style.background = "silver"
    


}