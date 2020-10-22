// js算法专题


// 1. 树的遍历--递归版本
// var inorderTraversal = function(root) {
//     let res = []
//     const midSort = (node) => {
//         if(!node) return 
//         res.push(node.val)
//         midSort(node.left)
//         midSort(node.right)
//     }
//     midSort(root)
//     return res    

// };

// var inorderTraversal = function(root) {
//     let res = []
//     const midSort = (node) => {
//         if(!node) return 
//         midSort(node.left)
//         res.push(node.val)
//         midSort(node.right)
//     }
//     midSort(root)
//     return res    

// };

// var inorderTraversal = function(root) {
//     let res = []
//     const midSort = (node) => {
//         if(!node) return 
//         midSort(node.left)
//         midSort(node.right)
//         res.push(node.val)
//     }
//     midSort(root)
//     return res    

// };

// 2. 树的遍历--非递归版本
// 先序---先塞又儿子，再塞做儿子，保证根左右的遍历，精彩
// var inorderTraversal = function(root) {
//     if(!root) return []
//     let stack = []
//     let res = []
//     stack.push(root)
//     while(stack.length) {
//         let node = stack.pop()
//         res.push(node.val)
//         node.right && stack.push(node.right)
//         node.left && stack.push(node.left)
//     }
//     return res
// };

// 中序遍历：

// const midSort = (root) => {
//     if(!root) return []
//     let res = []
//     let stack = []
//     while(root || stack.length) {
//         while(root) {
//             stack.push(root)
//             root = root.left
//         }
//         root = stack.pop()
//         res.push(root.val)
//         stack.push(root.right)
//     }
//     return res    
// }


// 3. 
//     输入：
    // A: [1,2,3,2,1]
    // B: [3,2,1,4,7]
    // 输出：3
    // 解释：
    // 长度最长的公共子数组是 [3, 2, 1] 。
    // const f = (arr1,arr2) => {
        
    // }

    // 4.快排js
    // const quickSort = function(nums) {
    //     if(nums.length == 0 || nums.length == 1)  return nums
    //     let pivot = nums[0]
    //     let left = nums.slice(1).filter(item => item < pivot)
    //     let right = nums.slice(1).filter(item => item >= pivot)
    //     return quickSort(left).concat(pivot,quickSort(right))
    // }

    // let arr = [5,2,7,8,4]
    // console.log(quickSort(arr))

    // 5 相交区间--真尼玛肯爹，growingio要求写重叠区间居然都挂了。。。
    // const f = (arr1,arr2) => {
    //     if(arr2[0] >= arr1[1]) {
    //         return false
    //     } 
    //     if(arr2[0] > arr1[0] && arr2[0] < arr1[1]) {
    //         return true
    //     }
    //     if(arr2[1] > arr1[0] && arr2[1] < arr1[1]) {
    //         return true
    //     }
    //     if(arr2[1] <= arr1[0]) {
    //         return false
    //     }
    // }
    // console.log(f([1,10],[10,11]))
    // console.log(f([1,10],[8,11]))
    // console.log(f([1,10],[0,8]))
    // console.log(f([3,10],[1,3]))



//  6 最短路径
// const f = (grid) => {
//     const m = grid.length
//     const n = grid[0].length
//     let res = 0
//     if(m === 1) {
//         for(let item in grid[0]) {
//             res = res + Number(item)
//         }
//         return res
//     } else if(n === 1) {
//         grid.map(item => {
//             res = res + item[0]
//         })
//         return res
//     } else {
//         let dp = JSON.parse(JSON.stringify(grid))
//         for(let i=1;i< dp[0].length;i++) {
//             dp[0][i] = dp[0][i-1] + dp[0][i]
//         }
//         for(let i =1;i< m;i++) {
//             dp[i][0] = dp[i-1][0] + dp[i] [0]
//         }
//         for(let i = 1; i< m;i++) {
//             for(let j = 1;j< n;j++) {
//                 dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + dp[i][j]
//             }
//         }
//         console.log('dp:',dp)
//     }
// }
// let grid = [  [1, 1, 1],  [3, 1, 5],  [4, 1, 1]  ]
// console.log(f(grid))

// ========================

// 7 数组全排列,兼容包含重复数字的数组，不过力扣官方表示超时？你大爷的
// 这道题在我看来不简单，毕竟递归理解起来还是蛮费劲的，其实从这道题我们就能看出计算机相对于人脑的先天优势，就通过下面这个函数，
// 我们成功实现了输入数组输出全排列的问题，相信以后的应用场景还是蛮多的
// const f = (arr) => {
//     if(!arr.length) return
//     let path = []
//     let res = []
//     let visited = new Array(arr.length).fill(false)
//     const seek = (path) =>{
//         if(path.length === arr.length) {
//             let flag = res.filter(item => JSON.stringify(item) === JSON.stringify(path))
//             if(!flag.length) {
//                 res.push([...path])
//             }
//             return
//         }
//         for(let i=0;i < arr.length;i++) {
//             if(!visited[i]) {
//                 path.push(arr[i])
//                 visited[i] = true
//                 seek(path)
//                 path.pop()
//                 visited[i] = false
//             }
//         }
//     }
//     seek(path)
//     return res
// }

// let arr = [1,1,2,3]
// console.log('res:',f(arr))


// 8 连续子序列
// const f = (arr) =>{
//     let res = []
//     for(let i = 0; i< arr.length;i++) {
//         for(let j = i; j < arr.length;j++) {
//             let temp = arr.slice(i,j+1)
//             res.push(temp)
//         }
//     }
//     let sum = 0
//     res = res.filter(item => item.length % 2 !== 0)
//     let result = []
//     for(let i=0;i< res.length;i++) {
//         result.push(...res[i])
//     }
//     let s = result.reduce((a,b) => {
//         return a+b
//     })
//     return s

// }

// f([1,2,3])

// 9. 求根节点到叶子结点的数字之和

const sumNumbers = function(root) {
    if(!root) return 0
    let sum = 0
    const dfs = (node, cur) => {
        cur = cur *10 + node.value
        if(!node.left && !node.rigth) {
            sum = sum + cur
        }
        if(node.left) dfs(node.left,cur)
        if(node.right) dfs(node.right,cur)
    }
    dfs(root,0)
}