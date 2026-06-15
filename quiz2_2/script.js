
// task 1

// function AddDiv(){

//     let container = document.getElementsByClassName("container");

//     if(container != 0){

//         container = document.createElement('div');

//         container.style.position = 'relative';
//         container.style.width = '100vw';
//         container.style.height = '100vh';
//         container.style.overflow = 'hidden';
//         document.body.appendChild(container);


//     }

//     for(let i = 0; i < 10; i++){
//         var div = document.createElement("div")


//         const width = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
//         const height = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

//         var area = width * height;

//         const maxLeft = window.innerWidth - width;
//         const maxTop = window.innerHeight - height;
        
//         const left = Math.floor(Math.random() * maxLeft);
//         const top = Math.floor(Math.random() * maxTop);
//         console.log(top)
//         console.log(left)



//         div.style.position = 'absolute';
//         div.style.width = `${width}px`;
//         div.style.height = `${height}px`;
//         div.style.left = `${left}px`;
//         div.style.top = `${top}px`;


//         div.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`; // შემთხვევითი ფერი
//         div.style.border = '1px solid #000';
//         div.style.display = 'flex';
//         div.style.alignItems = 'center';
//         div.style.justifyContent = 'center';
//         div.style.fontSize = '12px';
//         div.style.color = 'white';//
//         div.style.fontWeight = 'bold';

//         div.innerHTML = area;

//         container.appendChild(div);
//     }

// }

// AddDiv()

// task 2

// function GenerateTable(){

//     var n = prompt("please insert column number: ");
//     var m = prompt("please insert row number: ")


//     const table = document.createElement("table");
//     table.setAttribute('border', '1'); 
//     table.style.borderCollapse = 'collapse';


//     for (let i = 0; i < n; i++) {
//         const row = document.createElement('tr'); 

//         for (let j = 0; j < m; j++) {
//             const cell = document.createElement('td'); 
//             cell.style.width = '50px';
//             cell.style.height = '50px';
//             cell.style.textAlign = 'center';

            
//             if (Math.random() < 0.5) {
                
//                 const num = Math.floor(Math.random() * 101) + 100;
//                 cell.innerText = num;
//                 cell.style.backgroundColor = 'lightgray'; 
//             } 

//             row.appendChild(cell); 
//         }
//         table.appendChild(row); 
//     }

//     document.body.appendChild(table);
// }

// GenerateTable()

// task 3 

function GenerateGrids(){

    const grid = document.getElementById('grid');
    const divs = document.getElementById('divs');

    


    for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            
            
            const num = Math.floor(Math.random() * 16) + 1;
            cell.innerText = num;

            console.log(cell)
            console.log(num)
            cell.style.width = '45px';
            cell.style.height = '45px';
            cell.style.border = '1px solid black';
            cell.style.textAlign = 'center';
            cell.style.cursor = 'pointer';

            
            
            divs.innerHTML = ''; 

                
            for (let j = 0; j < num; j++) {
                const newDiv = document.createElement('button');
                newDiv.innerText = j + 1;
                    
                console.log(newDiv)
                newDiv.style.width = '40px';
                newDiv.style.height = '40px';
                newDiv.style.backgroundColor = 'red';
                newDiv.style.color = 'white';
                newDiv.style.textAlign = 'center';

                divs.appendChild(newDiv);
            }

            

        }
}

GenerateGrids()
