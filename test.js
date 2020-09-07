

// const test = {
//     a: 1
// }

// console.log(Object.getOwnPropertyDescriptor(test,'a'))

// Object.defineProperty(test,'test',{
//     value: 'test',
//     enumerable: true,
//     writable: true,
//     configurable: true
// })

// console.log('test:',test)

// 1.this指向问题
// let alex = {
//     name: 'alex',
//     sayHello: function(age,tall) {
//         console.log('i am ' + this.name + ',this year i am ' + age + ' years old... and i am ' + tall + ' m')
//     }
// }

// let bob = {
//     name: 'bob',
// }

// Function.prototype.myCall = function() {
//     const args = [...arguments]
//     const target = args[0]
//     target._f = this
//     let res = target._f(...args.slice(1))
//     delete target._f
//     return res
// }


// Function.prototype.myApply = function() {
//     let args = [...arguments]
//     let target = args[0]
//     target._f = this
//     let res =target._f(...args[1])
//     delete target._f
//     return res
// }

// Function.prototype.myBind = function() {
//     let args = [...arguments]
//     let target = args[0]
//     target._f = this
//     let res = target._f(...args.slice(1))
//     delete target._f
//     return function() {
//         return res
//     }
    
// }



// alex.sayHello.call(bob,26,1.65)
// alex.sayHello.apply(bob,[26,1.65])
// alex.sayHello.bind(bob,26,1.65)()

// alex.sayHello.myCall(bob,26,1.65)
// alex.sayHello.myApply(bob,[26,1.65])
// alex.sayHello.myBind(bob,26,1.65)()



// 2.快排js
// const quickSort = function(nums) {
//     if(nums.length == 0 || nums.length == 1)  return nums
//     let pivot = nums[0]
//     let left = nums.slice(1).filter(item => item < pivot)
//     let right = nums.slice(1).filter(item => item >= pivot)
//     return quickSort(left).concat(pivot).concat(quickSort(right))
// }

// let arr = [5,2,7,8,4]
// console.log(quickSort(arr))


// 3.new 一个对象发生了啥
    // 1) 创建一个空对象
    // let Parent = function (name, age) {
    //     this.name = name;
    //     this.age = age;
    // };
    // Parent.prototype.sayName = function () {
    //     console.log(this.name);
    // };

    // let test = new Parent('alice',23)
    // const myNew = function() {
    //     const args = [...arguments]
    //     const parent = args[0]
    //     let child = Object.create(parent.prototype)
    //     let res = parent.apply(child,args.slice(1))
    //     return typeof res === 'object'? res: child
    // }
    // let test2 = myNew(Parent,'alice',23)
    // console.log('test:',test)
    // console.log('test2:',test2)
    // console.log('test.__proto__:',test.__proto__)
    // console.log('test2.__proto__:',test2.__proto__)
    // console.log(test instanceof Parent)
    // console.log(test.hasOwnProperty('name'))
    // console.log(test.hasOwnProperty('age'))
    // console.log(test.hasOwnProperty('sayName'))
    // console.log('parent.prototype:',Parent.prototype)
    // console.log('parent.prototype:',test.__proto__)
    // 妈的越看越懵逼


    
 // 4.vue原理

class element{
    constructor(type,props,children) {
        this.type = type
        this.props = props
        this.children = children
    }
}

const creatElement = function(type,props,children) {
    return new element(type,props,children)
}

const setAtt = function(node,key,value) {
    node.setAttribute(key,value)
    return node
    
}

const render = function(elObj) {
    let el = document.createElement(elObj.type)
    for(let key in elObj.props) {
        setAtt(el,key,elObj.props[key])
    }
    elObj.children.forEach(child => {
        child = (child instanceof element)? render(child): document.createTextNode(child)
        el.appendChild(child)
    });
    return el
    
}

const renderDom = function(el,target) {
    target.appendChild(el)
}

// diff函数：输入两个大json，返回两个虚拟dom的差异
const diff = function(oldTree,newTree) {
    let patches = {}
    let index = 0
    walk(oldTree,newTree,index,patches)
    return patches
}
const ATTR = "ATTR"
const TEXT = "TEXT"

//   
const walk = function(oldNode,newNode,index,patches) {
    let currentPatch = []
    if(oldNode.type === newNode.type) {
        let attrs = diffAttr(oldNode.props,newNode.props)
        if(!attrs.length) {
            currentPatch.push({type: ATTR,attrs})
        }
    }
    if(currentPatch.length > 0 ) {
        patches[index] = currentPatch
    }
}

const diffAttr = function(oldprops,newprops) {
    let patches = []
    for(let key in oldprops) {
        if(oldprops[key] !== newprops[key]) {
            patches[key] = newprops[key]
        }
    }

    for(let key in newprops) {
        if(!oldprops.hasOwnProperty(key)) {
            patches[key] = newprops[key]
        }
    }
    return patches
}



let vnodeOld = creatElement('ul',{class: "list"},[
    creatElement('li',{class: 'item'},[1]),
    creatElement('li',{class: 'item'},[2]),
    creatElement('li',{class: 'item'},[3]),
])

let vnodeNew = creatElement('ul',{class: "list-grop"},[
    creatElement('li',{class: 'item'},[1]),
    creatElement('li',{class: 'item'},[2]),
    creatElement('li',{class: 'item'},[3]),
])
// diff(vnodeOld,vnodeNew)

// let el = render(vnodeOld)
// renderDom(el,document.getElementById("fullpage"))



// 5.类型相关的坑
// typeof 可以返回除null和array的所有类型紫的字符串结果
// console.log(typeof "123")
// console.log(typeof 123)
// console.log(typeof [1,2,3,4])
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof Symbol(112))
// console.log(typeof function(){})
// console.log(typeof {})
// console.log(typeof true)

// 6. 作用域相关--被一图科技搞死
    // 1）
    // part1 考察function的变量提升高于var
    // console.log(a);
    // function a() {};
    // console.log(a);
    // var a = 1;
    // console.log(a);

    // // part2--这尼玛考察啥？
    // var foo = 1;
    // console.log(foo); 
    // function foo() {};
    // console.log(foo); 

    // 2）
// part1
    // var scope = "global scope";
    // function checkscope(){
    //     var scope = "local scope";
    //     function f(){
    //         return scope;
    //     }
    //     return f();
    // }
    // let res = checkscope()
    // console.log('res:',res)

    // part2 ---尼玛，原本能好好的回答的
    // var scope = "global scope";
    // function checkscope(){
    //     var scope = "local scope";
    //     function f(){
    //         return scope;
    //     }
    //     return f;
    // }
    // checkscope()();
    // let test = checkscope()
    // console.log('test:',test())
    // let res = checkscope()()
    // console.log('res:',res)

    // 3）：注意两件事，第一个，this指向调用他的对象作用域 第二个，尖头函数不改变
    // var name = 'window'
    // var obj1 = {
    //   name: 'obj1',
    //   foo: function () {
    //     console.log(this.name)
    //     return function() {
    //       console.log(this.name)
    //     }
    //   }
    // }
    // var obj2 = {
    //   name: 'obj2',
    //   foo: () => {
    //     console.log(this.name)
    //     return function () {
    //       console.log(this.name)
    //     }
    //   }
    // }
    
    // // obj1.foo()()
    // obj2.foo()()

    // 7.事件循环
    // async function async1() {
    //     console.log("async1 start");
    //     await async2();
    //     console.log("async1 end");
    //     setTimeout(() => {
    //       console.log('timer1')
    //     }, 0)
    //   }
    // async function async2() {
    //     setTimeout(() => {
    //       console.log('timer2')
    //     }, 0)
    //     console.log("async2");
    //   }
    // async1();
    // setTimeout(() => {
    // console.log('timer3')
    // }, 0)
    // console.log("start")

    // 8.worker--创建独立于主线成的线程--啥啥啥？都特么是啥玩意儿
    // var i = 0, count = 0; 

    // self.onmessage = function(e) {
    //     count = e.data;
    // }

    // function countNumber() {
    //     if(i < count){
    //         i = i + 1;
    //         self.postMessage(i); // 将信息发送到主线程上
    //     }
    //     console.log(i);
    //     setTimeout(countNumber, 500)
    // }
    // countNumber();


<<<<<<< HEAD
    // 同花顺：
    // let arr = []
    // let numss = arr.map(item => parseInt(item))
    // let nums = numss.sort((a,b) => {
    //     return a-b
    // })
    // for(let i=0;i< nums.length;i++) {
    //     let temp = nums.slice(0,i).concat(nums.slice(i+1))
    //     // console.log("yemp:",temp)
    //     console.log(temp[Math.floor(temp.length/2)])
    // }





    const range = (arr) => {
        if(!arr.length) return []
        let visited = new Array(arr.length).fill(false)
        let res = []
        const f = (path) => {
            if(path.length === arr.length) {
                console.log("path:",path)
                res.push([...path])
                return
            } 
            for(let i =0;i < arr.length;i++) {
                if(visited[i]) continue
                visited[i] = true
                path.push(arr[i])
                f(path)
                visited[i] = false
                path.pop()
            }
        }
        let path = []
        f(path)
        return res
    }

// n个书中，取出kgege
=======
    // 9.全排列
    // 1) 不含重复元素的数组，返回所有可能
    // const arrange= function(arr) {
    //     if(!arr.length) return []
    //     let res = []
    //     let visited = new Array(arr.length).fill(false)
    //     const f = function(path){
    //         if(path.length === arr.length) res.push(now)
    //         for(let i = 0; i < arr.length;i++) {
    //             if(visited[i]) continue
    //             visited[i] = true
    //             path.push(arr[i])
    //             f(path)
    //             path.pop()
    //             visited[i] = false
    //         }
    //     }
    //     let path = []
    //     f(path)
        
        

    // 10.给定一个范围，返回区间内的随机数
        // 1) Math.random() 生成0-1之间的随机数，不包括1
        
>>>>>>> 4c10a700799ead33f406d6951b5feb6743b185a1
