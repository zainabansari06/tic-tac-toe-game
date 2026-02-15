let cells = document.querySelectorAll('.grids');
let eachCell = ['','','','','','','','',''];
let currentPlayer='X';
let gameActive=true;
const winningConditions =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

cells.forEach((cell, index) => {
    cell.addEventListener('click', (event) => clickedCell(event, index));
});

function clickedCell(event, index) {
    const cellClicked = event.target;

    if (eachCell[index] !== '' || !gameActive) {
        return; 
    }

    eachCell[index] = currentPlayer;
    
    cellClicked.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    checkWinner();
}
function checkWinner()
{
    let roundWon=false;
    for (let i=0 ; i < winningConditions.length ; i++)
    {
        let condition = winningConditions[i];
        let a = eachCell[condition[0]];
        let b = eachCell[condition[1]];
        let c = eachCell[condition[2]];

        if(a===''||b===''||c==='')
        {
            continue;
        }

        if(a===b&&b===c)
        {
            roundWon=true;
            break;
        }
    }

    if(roundWon)
    {
        alert(`player ${currentPlayer === 'X' ? 'O' : 'X'} has won!`);
        gameActive=false;
        return;
    }

    if (!eachCell.includes('')) {
        alert("It's a draw!");
        gameActive = false;
    }
}

let resetButton = document.getElementById('reset-button')
function resetIt(event)
{
    eachCell=['','','','','','','','',''];
    currentPlayer='X';
    gameActive=true;
    cells.forEach((cell)=>
    {
        cell.textContent='';
    });
    console.log("GAME RESET!");
}
resetButton.addEventListener('click',resetIt);