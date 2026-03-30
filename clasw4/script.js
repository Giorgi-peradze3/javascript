// function q1_t1(){
//     // alert("quiz 1, task 1")
//     var r1 = document.getElementById("r-1")
//     // r1.innerText = "quiz 1, task 1"
//     // r1.innerText = get_randoms(5, 10 ,15)
//     r1.innerText = get_data_from_arr(get_randoms(4, 1 ,8))
// }

// // [10. 100]
// function get_randoms(n, a, b){
//     var arr_randoms = []
//     for(let i =0; i<n; i++ ){
//         var  r = Math.floor(Math.random() * (b - a + 1)) + a;
//         //console.log(r)
//         arr_randoms.push(r)
//     }
    

//     // console.log(arr_randoms)
//     return arr_randoms
// }



// get_randoms(5, 10 ,15)


// // [a , b] - [10, 100] - Math.floor(Math.random() * (b - a + 1)) + a;

// function get_data_from_arr(a){
    
//     console.log(a)
//     var s = 0
//     var m = 1
//     var min = a[0] // 10-jer davwero
//     var max = a[0]
//     var even = 0
//     var odd = a.length - even
//     var s_1 = 0, c_1 = 0
//     for(let i = 0; i < a.length; i ++){
//         s += a[i]
//         m *= a[i]
//         if(min > a[i]) min = a[i]
//         if(min < a[i]) min = a[i]
//         if(a[i] %2 == 0) even++
//         if (a[i] > 4){
//             s_1 += a[i]
//             c_1 ++
//         }

//     }
//     result = `მასივი = ${a},
//               ჯამი = ${s}, 
//               ნამრავლი = ${m},
//               მინიმალური = ${min},
//               მაქსიმალური = ${max},
//               ლუწები = ${even},
//               კენტები = ${odd}
//               საშუალო = ${(s_1 / c_1).toFixed(2)}`
//     //console.log(s, m, min, max)
//     return result;

// }

// get_data_from_arr(get_randoms(4, 1 ,8))


function d1_1(){
    var r1 = document.getElementById("d-1")
    r1.innerText = finc("andora")
}

function finc(n){

    
    var sum = 0
    for(let i = 0; i < n; i++){
        if(n[i] == "a"){
            sum ++
        }
    }
    

    result = `ასოების რაოდენობა = ${n.length},
              ასოს რაოდენობა = ${sum}`
    return result

}

finc("andora")


