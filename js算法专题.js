// js算法专题

// 1. 树的遍历--递归版本
var inorderTraversal = function(root) {
    let res = []
    const midSort = (node) => {
        if(!node) return 
        res.push(node.val)
        midSort(node.left)
        midSort(node.right)
    }
    midSort(root)
    return res    

};

var inorderTraversal = function(root) {
    let res = []
    const midSort = (node) => {
        if(!node) return 
        midSort(node.left)
        res.push(node.val)
        midSort(node.right)
    }
    midSort(root)
    return res    

};

var inorderTraversal = function(root) {
    let res = []
    const midSort = (node) => {
        if(!node) return 
        midSort(node.left)
        midSort(node.right)
        res.push(node.val)
    }
    midSort(root)
    return res    

};

// 2. 树的遍历--非递归版本
// 先序
var inorderTraversal = function(root) {
    if(!root) return []
    let res = []
    let nodelist = []
    nodelist.push(root)
    while(nodelist.length > 0) {
        let node = nodelist.pop()
        res.push(node.val)
        if(node.left) nodelist.push(node.left)
        if(node.right) nodelist.push(node.right)
    }
    return res

};

