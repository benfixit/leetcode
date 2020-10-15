function numberOfIslands(grid){
    let count = 0;
    if(grid === null || grid.length === 0){
        return count
    }

    let visited = Array.from(new Array(grid.length), () => new Array(grid[0].length).fill(false))

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === '1' && visited[i][j] === false){
                console.log('Inside the for loop === ', 'i === ', i, 'j === ', j)
                dfs(grid, i, j, visited)
                count++
            }
        }
    }

    function dfs(grid, i, j, visited){
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || visited[i][j] === true || grid[i][j] === '0'){
            console.log('Inside the recursive call === ', 'i === ', i, 'j === ', j)
            return
        }

        visited[i][j] = true
        dfs(grid, i, j - 1, visited)
        dfs(grid, i, j + 1, visited)
        dfs(grid, i - 1, j, visited)
        dfs(grid, i + 1, j, visited)
    }
    return count;
}

grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

console.log(numberOfIslands(grid))