console.log("Hello, brave!")

let grid_bgd = document.createElement("div");



grid_bgd.style.height = "980px"
grid_bgd.style.width = "980px"

let testDiv = document.querySelector(".test")
testDiv.style.display = "flex";
testDiv.style.justifyContent = "center";
grid_bgd.style.padding = "0";

function createGrid(containerOfGrid, n){
    for (let i = 0; i < n; i++){
        let row = document.createElement("div");

        row.style.display = "flex";
    
        for (let j = 0; j < n; j++){
            let box = document.createElement("div");
            box.style.border = '1px solid black';
            //box.style.width = '20px'
            box.style.display = "flex"
            box.style.flexGrow = "1";

            let boxW = box.clientWidth;
            boxW.toString();
            boxW = boxW + "px"
            console.log(containerOfGrid.clientWidth)
            box.style.minHeight = "20px";
            box.style.aspectRatio = "1/1"

            row.appendChild(box);
        }
        
        containerOfGrid.appendChild(row);
    }
}

let userInput = prompt("Please enter a number:");



let N = parseInt(userInput)

createGrid(grid_bgd, N)




grid_bgd.addEventListener("mouseover", checkBoxes());





let test = document.querySelector(".test");
test.appendChild(grid_bgd);

grid_bgd.children[0].children[0].style.backgroundColor = "green";

let clicked = false;

function checkBoxes(){
    for (let i = 0; i < N; i++){
        
    
        for (let j = 0; j < N; j++){
            let currentBox = grid_bgd.children[i].children[j];

            currentBox.addEventListener("click", () => {
                currentBox.style.backgroundColor = "red";
                clicked = true;
                currentBox.className = "clicked";
            })

            currentBox.addEventListener("mouseover", () => {
                if (currentBox.className !== "clicked"){
                currentBox.style.backgroundColor = "blue";
                }
            })

            currentBox.addEventListener("mouseout", () => {
                if (currentBox.className !== "clicked"){
                currentBox.style.backgroundColor = "white";
                }
                clicked = false;
            })
        }
    }
}