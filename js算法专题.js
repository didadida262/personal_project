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