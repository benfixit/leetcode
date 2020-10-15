function numberOfIslands(grid){
    let numberOfIslands = 0;
    if(grid === null || grid.length === 0){
        return
    }
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === "1"){
                numberOfIslands += dfsUtil(grid, i, j)
            }
        }
    }

    console.log('Number Of Islands')

    function dfsUtil(grid, row, col){
        if(row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === "0"){
            return
        }

        grid[row][col] = "0"

        console.log('We got here!!!')

        dfsUtil(grid, row, col - 1)
        dfsUtil(grid, row, col + 1)
        dfsUtil(grid, row - 1, col)
        dfsUtil(grid, row + 1, col)

        return 1
    }
    
    dfsUtil(grid, 0, 0)
    
    return numberOfIslands
}

const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];

  const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

console.log(numberOfIslands(grid1))
console.log(numberOfIslands(grid2))



function recursive(preStart, inStart, inEnd, preorder, inorder){
    if(inStart > inEnd){
        return null;
    }
    let rootValue = preorder[preStart]
    let root = new TreeNode(rootValue)
    let rootInorderIndex = inorder.indexOf(root.val);

    root.left = recursive(preStart + 1, inStart, rootInorderIndex - 1, preorder, inorder)
    let leftCount = rootInorderIndex - inStart + 1;
    root.right = recursive(preStart + leftCount, rootInorderIndex + 1, inEnd, preorder, inorder)

    return root;
}

return recursive(0, 0, preorder.length - 1, preorder, inorder) 