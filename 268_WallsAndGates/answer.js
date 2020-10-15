function wallsAndGates(grid){
    if(grid === null || grid.length === 0){
        return;
    }

    const row = grid.length;
    const col = grid[0].length;

    const visited = Array.from(new Array(row), () => new Array(col).fill(false))

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 0 && !visited[i][j]){
                dfsUtil(i, j, grid, visited)
            }
        }
    }

    dfsUtil(0, 0, grid, visited)

    function dfsUtil(i, j, grid, visited){
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || visited[i][j]){
            return
        }

        visited[i][j] = true;
        if(grid[i][j] === 'INF'){
            console.log('INF', grid[i][j])
        } else{
            console.log('Location === ', grid[i][j])
        }
        dfsUtil(i, j - 1, grid, visited)
        dfsUtil(i, j + 1, grid, visited)
        dfsUtil(i - 1, j, grid, visited)
        dfsUtil(i + 1, j, grid, visited)
    }
}

const grid = [
    ['INF', -1, 0, 'INF'],
    ['INF', 'INF', 'INF', -1],
    ['INF', -1, 'INF', -1],
    [0, -1, 'INF', 'INF']
]

console.log(wallsAndGates(grid))