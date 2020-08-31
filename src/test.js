// const promiseAlll = function() {
//     return new Object(function() {
//         return 'asdasd'
//     })
// }


// const promiseAlll = function(list) {
//     return new Promise((resolve, reject) => {
//         let resValues = [];
//         let counts = 0;
//         for (let i =0;i < list.length;i++) {
//             resolve(list[i]).then(res => {
//                 counts++;
//                 resValues[i] = res;
//                 if (counts === list.length) {
//                     resolve(resValues)
//                 }
//             }, err => {
//                 reject(err)
//             })
//         }
//     })
// }

// let p1 = new Promise()

// console.log(promiseAlll([p1]))


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
let alex = {
    name: 'alex',
    sayHello: function(age,tall) {
        console.log('i am ' + this.name + ',this year i am ' + age + ' years old... and i am ' + tall + ' m')
    }
}

let bob = {
    name: 'bob',
}



Function.prototype.myCall = function() {
    const args = [...arguments]
    let target = args[0]
    target._f_ = this
    let res = target._f_(...args.slice(1))
    delete target._f_
    return res
}

Function.prototype.myApply = function() {
    const args = [...arguments]
    const target = args[0]
    target._f_ = this
    let res = target._f_(...args[1])
    delete target._f_
    return res
}


Function.prototype.myBind = function() {
    const args = [...arguments]
    const target = args[0]
    target._f_ = this
    let res = target._f_(...args.slice(1))
    delete target._f_
    return function() {
        return res
    }

}


// alex.sayHello.myCall(bob,26,1.65)
// alex.sayHello.myApply(bob,[26,1.65])
// alex.sayHello.myBind(bob,26,1.65)()


// 2.快排js
const quickSort = function(nums) {
    if(nums.length == 0 || nums.length == 1)  return nums
    let pivot = nums[0]
    let left = nums.slice(1).filter(item => item < pivot)
    let right = nums.slice(1).filter(item => item >= pivot)
    return quickSort(left).concat(pivot).concat(quickSort(right))
}

// let arr = [5,2,7,8,4]
// console.log(quickSort(arr))


// 3.new 一个对象发生了啥
    // 1) 创建一个空对象
    let Parent = function (name, age) {
        this.name = name;
        this.age = age;
    };
    Parent.prototype.sayName = function () {
        console.log(this.name);
    };

    let test = new Parent('alice',23)
    const myNew = function() {
        const args = [...arguments]
        const parent = args[0]
        let child = Object.create(parent.prototype)
        let res = parent.apply(child,args.slice(1))
        return typeof res === 'object'? res: child
    }

    let test2 = myNew(Parent,'alice',23)

    console.log('test:',test)
    console.log('test2:',test2)
    console.log('test.__proto__:',test.__proto__)
    console.log('test2.__proto__:',test2.__proto__)
    // console.log(test instanceof Parent)
    // console.log(test.hasOwnProperty('name'))
    // console.log(test.hasOwnProperty('age'))
    // console.log(test.hasOwnProperty('sayName'))
    // console.log('parent.prototype:',Parent.prototype)
    // console.log('parent.prototype:',test.__proto__)
    // 妈的越看越懵逼


    
