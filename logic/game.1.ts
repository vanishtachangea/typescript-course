
class Cell {
    color: string;
    /*     north:string;
        south:string;
        east:string;
        west:string; */
    right: Cell;
    bottom: Cell;
}

const board: string[][] = [
    ['R2', 'R2', 'Y3'],
    ['R2', 'R1', 'R1'],
    ['R1', 'R1', 'R1']];


for (let i = 0; i < board.length; i++) {
    console.log(board[i][0]);
}
/* const preOrder=(cell:Cell)=>{
    console.log(cell.color);
    preOrder(cell.right);
    preOrder(cell.bottom);
} */
let color = 'R1';
let row = 0;
const traverseRight = (row: number, board: string[][], color: string): number => {
    console.log("inside travers");
    let count = 0;
    let j = 0;
    while (j < board.length) {
        console.log(board[row][j]);
        if (board[row][j] == color) {
            count = count + 1;
        }
        else
            break;
        j = j + 1;
    }
    return count;
}
const cnt = traverseRight(1, board, color);
console.log(cnt);
console.log("....");
console.log(board);
let count = 0;
const traverseRec = (board: string[][], i: number, j: number, color: string, count: number): number => {
    //console.log("i: "+i+" j: "+j);
    //console.log(board[i][j]);
    if (board[i][j] == color) {
        count = count + 1;
        board[i][j]='X';

        if (j < board.length - 1) {
            //console.log("as"+j);
            count = traverseRec(board, i, j + 1, color, count);
        }
        if (j >= 1) {
            //console.log("bb"+j);
            count = traverseRec(board, i, j - 1, color, count);
        }
        if (i < board[0].length - 1) {
            count = traverseRec(board, i + 1, j, color,count);
        }

        if (i >= 1) {
            count = traverseRec(board, i - 1, j, color, count);
        }  
    }
    else{
        if (i < board[0].length - 1) {
            count = traverseRec(board, i + 1, j, color, count);
        }
    }
    return count;
}
console.log("....");
const cnt2 = traverseRec(board, 0, 0, 'R1',0);
console.log(cnt2);

const cnt3 = traverseRec(board, 0, 0, 'R2',0);
console.log(cnt3);

const nextBoard = (board: string[][], newColor: string): string[][] => {
    let newBoard: string[][] = [];
    newBoard = [...board];
    for(let i=0;i <newBoard.length;i++){
        for(let j=0;j<newBoard[i].length;j++){
            if(newBoard[i][j]=='X'){
                newBoard[i][j]=newColor;
            }
        }
    }
    return newBoard;
}
console.log(nextBoard(board, 'R1'));
/* for(let i=0;i<board.length;i++)
{
    console.log(board[i][0]);
} */


