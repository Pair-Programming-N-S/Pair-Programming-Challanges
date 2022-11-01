//https://www.hackerrank.com/challenges/two-pluses/problem

function twoPluses(grid) {
    // Write your code here

    //Check if no G found return 0;
    //
    const n = grid.length;
    const m = grid[0].length;

    let x, y = 1;
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < m; j++) {
            let block = grid[i][j];

            let left = grid[i][j - 1];
            let right = grid[i][j + 1];
            let top = i === 0 ? undefined : grid[i - 1][j];
            let bottom = i >= n - 1 ? undefined : grid[i + 1][j];

            if (left === 'G' && right === 'G' && top === 'G' && bottom === 'G' && block === 'G') {
                x = y;
                y = y + 4;
            }
            // console.log(left,right,top,bottom);
            // if(grid[i][j-1] === ){}
        }
    }
}