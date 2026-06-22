
// task 1
// const box = document.getElementsByClassName("Box")[0];
// const button = document.getElementsByClassName("Button")[0];

// const colors = ['green', 'blue', 'red', 'yellow'];

// const colorCount = {
//     green: 0,
//     blue: 0,
//     red: 0,
//     yellow: 0
// };



// function GenerateBox(){

//     const total = 7 * 8;
    
//     for(let i = 0; i < total; i++){
//         const square = document.createElement("div");
//         square.classList.add("small-square");


//         const randomColor = colors[Math.floor(Math.random() * colors.length)];

//         square.style.backgroundColor = randomColor;
//         colorCount[randomColor]++;

        
//         if (randomColor === 'blue') {
//             square.classList.add('blue-square');
//         }

       
//         box.appendChild(square);
//     }

    
//     console.log("color ammount:", colorCount);


//     }

// GenerateBox()

// button.addEventListener("click", function(){

//     const blue = document.getElementsByClassName("blue-square");

//     for(let i = 0; i < blue.length; i++){

//         blue[i].style.backgroundColor = 'silver';

//     }


// })


// task 2

// const colors = ['red', 'yellow', 'blue', 'green'];

// function GenerateTable(){

//     var n = prompt("please insert column number: ");
//     var m = prompt("please insert row number: ")


//     const table = document.createElement("table");
//     table.setAttribute('border', '1'); 
//     table.style.borderCollapse = 'collapse';
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];


//     for (let i = 0; i < n; i++) {
//         const row = document.createElement('tr'); 
//         row.style.backgroundColor = randomColor;

//         for (let j = 0; j < m; j++) {
//             const cell = document.createElement('td'); 
//             cell.style.width = '50px';
//             cell.style.height = '50px';
//             cell.style.textAlign = 'center';
//             cell.style.backgroundColor = randomColor;
            
            

//             row.appendChild(cell); 
//         }
//         table.appendChild(row); 
//     }

//     document.body.appendChild(table);
// }

// GenerateTable()


// setTimeout(GenerateTable(), 3000);

// task3

// const addBtn = document.getElementById("imgadd");


// function deletePhoto(cardId) {
//     const card = document.getElementById(cardId);
//     card.classList.add("hidden");
// }


// function refreshPhoto(cardId) {
//     const currentCard = document.getElementById(cardId);
    
    
//     const hiddenCards = Array.from(document.querySelectorAll(".photo-card.hidden"));
    
//     if (hiddenCards.length > 0) {
//         const randomIndex = Math.floor(Math.random() * hiddenCards.length);
//         const randomHiddenCard = hiddenCards[randomIndex];
        
        
//         currentCard.classList.add("hidden");
//         randomHiddenCard.classList.remove("hidden");
//     } 
// }


// addBtn.onclick = function() {
    
//     const hiddenCards = Array.from(document.querySelectorAll(".photo-card.hidden"));
    
//     if (hiddenCards.length > 0) {
        
//         const randomIndex = Math.floor(Math.random() * hiddenCards.length);
//         hiddenCards[randomIndex].classList.remove("hidden");
//     } 
// };
