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
// 先序
// var inorderTraversal = function(root) {
//     if(!root) return []
//     let res = []
//     let nodelist = []
//     nodelist.push(root)
//     while(nodelist.length > 0) {
//         let node = nodelist.pop()
//         res.push(node.val)
//         if(node.left) nodelist.push(node.left)
//         if(node.right) nodelist.push(node.right)
//     }
//     return res

// };

// 3. 
//     输入：
    // A: [1,2,3,2,1]
    // B: [3,2,1,4,7]
    // 输出：3
    // 解释：
    // 长度最长的公共子数组是 [3, 2, 1] 。
    const f = (arr1,arr2) => {
        
    }

    // 4.快排js
    // const quickSort = function(nums) {
    //     if(nums.length == 0 || nums.length == 1)  return nums
    //     let pivot = nums[0]
    //     let left = nums.slice(1).filter(item => item < pivot)
    //     let right = nums.slice(1).filter(item => item >= pivot)
    //     return quickSort(left).concat(pivot).concat(quickSort(right))
    // }

    // let arr = [5,2,7,8,4]
    // console.log(quickSort(arr))