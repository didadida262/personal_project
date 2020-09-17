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
//     },
//     test: function(){
//         console.log("this:",this)
//     },
//     test2: () => {
//         console.log("this:",this)
//     }
// }
// // alex.test()
// // alex.test2()

// let bob = {
//     name: 'bob',
// }







Function.prototype.myCall = function() {
    // eslint-disable-next-line prefer-rest-params
    const args = [...arguments]
    const target = args[0]
    target._f = this
    target._f(...args.splice(1))
    delete target._f
}

Function.prototype.myApply = function() {
    const args = [...arguments]
    const target = args[0]
    target._f = this
    target._f(...args[1])
    delete target._f
}

Function.prototype.myBind = function() {
    const args = [...arguments]
    const target = args[0]
    target._f = this
    return () => {
        target._f(...args.slice(1))
        delete target._f
    }
}
// 上述代码，堪称完美

// ----------------------错误写法 为什么要有return呢你大爷的
// Function.prototype.myCall = function() {
//     const args = [...arguments]
//     let target = args[0]
//     target._f_ = this
//     let res = target._f_(...args.slice(1))
//     delete target._f_
//     return res
// }

// Function.prototype.myApply = function() {
//     const args = [...arguments]
//     const target = args[0]
//     target._f_ = this
//     let res = target._f_(...args[1])
//     delete target._f_
//     return res
// }


// Function.prototype.myBind = function() {
//     const args = [...arguments]
//     const target = args[0]
//     target._f_ = this
//     let res = target._f_(...args.slice(1))
//     delete target._f_
//     return function() {
//         return res
//     }
// }
// ------------------------------------------



// alex.sayHello.myCall(bob,26,1.65)
// alex.sayHello.myApply(bob,[26,1.65])
// alex.sayHello.myBind(bob,26,1.65)()

// 习题轰炸
// 1). 默认绑定
    // function a(){
    //     var user = '剃了胡子';
    //     console.log(this.user);    // undefined
    //     console.log(this);    // window
    //     }
    // a();    // 这里相当于 window.a();
    // this 最终指向的是调用它的对象，这里的函数a实际是被 window 对象所点出来的

    // var o = {
    //         a: 10,
    //         b: {
    //             a: 12,
    //             fn: function(){
    //                 console.log(this.a);    // undefined
    //                 console.log(this);    // window
    //             }
    //         }
    //     }
    //     var j = o.b.fn;
    //     j();

// 2). 隐士绑定
    // var a = {
    //     user: '剃了胡子',
    //     fn: function(){
    //         console.log(this.user);    // 剃了胡子
    //         console.log(this);    // {user: '剃了胡子', fn:  ƒ}
    //     }
    // }

    // a.fn();    // this 执行时被它的上一级对象 o{user: "剃了胡子", fn: ƒ} 调用

// 3). 当this遇到return，这里其实可以考察对new的理解
    // function fn(){
    //     this.user = '剃了胡子';
    //     return {};
    // }
    // const fn2 = function() {
    //     this.user = "nima"
    //     return {}
    // }

    // let a = new fn();
    // console.log("a:",a.user);    // undefined,因为return了一个空对象

    // function fn(){
    //     this.user = '剃了胡子';
    //     return function() {};
    // }
    // var a = new fn;
    // console.log(a.user);    // undefined

    // function fn(){
    //     this.user = '剃了胡子';
    //     return 1
    // }
    // var a = new fn;
    // console.log(a.user);    // 剃了胡子，因为1是数字不是对象类型
    // function fn() { this.user = '剃了胡子'; return undefined; } var a = new fn; console.log(a.user); //剃了胡子
    // function fn() { this.user = '剃了胡子'; return null; } var a = new fn; console.log(a.user); //剃了胡子，null比较特殊

 

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
    //     console.log(child)
    //     let res = parent.apply(child,args.slice(1))
    //     return typeof res === 'object'? res: child
    // }
    // let test2 = myNew(Parent,'alice',23)

    // console.log('test:',test)
    // console.log('test2:',test2)
    // console.log('test.__proto__:',test.__proto__)
    // console.log('test2.__proto__:',test2.__proto__)
    // 妈的越看越懵逼
    // 也就那么回事，关键是不熟悉


// 4.promise

    // 1).new promise时是同步执行回调函数，.then是异步的
    // const promise  = new Promise((resolve,reject) => {
    //     console.log(1)
    //     resolve()
    //     // reject()
    //     console.log(2)
    // })

    // promise
    // .then(() => {
    //     console.log('resolve')
    // })
    // .catch(() => {
    //     console.log('reject')
    // })
    // console.log(4)

    // 2).  抛出throw会执行catch方法
    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('success')
    //       console.log('sss')
    //     }, 1000)
    //   })
    // console.log(promise)
    // promise
    // .then(() => {
    //     console.log(promise)
    //     throw new Error('error!!!')
    // })
    // .catch(err => {
    //     console.log(err)
    // })    
    
    // 3).new promise时的回调函数只执行第一次的resolve或者reject
    // const promise = new Promise((resolve, reject) => {
    //     resolve('success1')
    //     reject('error')
    //     resolve('success2')
    //   })
      
    //   promise
    //     .then((res) => {
    //       console.log('then: ', res)
    //     })
    //     .catch((err) => {
    //       console.log('catch: ', err)
    //     })    


    // 4). 链式调用，.then.then.then.....
    // Promise.resolve(1)
    // .then((res) => {
    //   console.log(res)
    //   return 2
    // })
    // .catch((err) => {
    //   return 3
    // })
    // .then((res) => {
    //   console.log(res)
    // })

    // 5). 
    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.log('once')
    //       resolve('success')
    //     }, 1000)
    //   })
      
    // const start = Date.now()
    // console.log('start:',start)
    // promise.then((res) => {
    //     console.log('now1:',Date.now())
    //     console.log(res, Date.now() - start)
    // })
    // promise.then((res) => {
    //     console.log('now2:',Date.now())
    //     console.log(res, Date.now() - start)
    // })

    // 6). return刨除错误并不会捕获catch还是走的then
    // Promise.resolve()
    // .then(() => {
    //   return new Error('error!!!')
    // })
    // .then((res) => {
    //   console.log('then: ', res)
    // })
    // .catch((err) => {
    //   console.log('catch: ', err)
    // })

    // 7).不能返回其本身，否则死循环

    // const promise = Promise.resolve()
    //     .then(() => {
    //         return promise
    //     })
    // promise.catch(console.error)    

    // 8). 这个就很诡异了，也没说打印res啊

    // Promise.resolve(1)
    // .then(2)
    // .then(Promise.resolve(3))
    // .then(console.log)

    // 9). 骚气的写法

    // Promise.resolve()
    // .then(function success (res) {
    //   throw new Error('error')
    // }, function fail1 (e) {
    //   console.error('fail1: ', e)
    // })
    // .catch(function fail2 (e) {
    //   console.error('fail2: ', e)
    // })

    // 10). 这题，很经典
    // process.nextTick(() => {
    //     console.log('nextTick')
    // })
    // Promise.resolve()
    // .then(() => {
    //     console.log('then')
    // })
    // setImmediate(() => {
    //     console.log('setImmediate')
    // })
    // console.log('end')

    // 11). 实现promise.all
    // const promise = new Promise()
    // .then(res => {
    //     console.log('success')
    // })
    // .catch(err => {
    //     console.log('err')
    // })
    // const promiseAll = function(arr) {
    //     return new Promise((resolve,reject) => {
    //         let len = 0
    //         let resolveArr = []
    //         arr.forEach(promise => {
    //             promise
    //             .then(res => {
    //                 resolveArr.push(res)
    //                 len++
    //                 if(len === arr.length) resolve(resolveArr)      
    //             })
    //             .catch(err => {
    //                 return 'err'
    //             })
    //         }) 
    //     })
    // }
    // let promise = new Promise((resolve,reject) => {
    //     resolve()
    // })
    // promise.then(() => {
    //       console.log("succ")
    //   })
    //   .catch(() => {
    //       console.log('fail')
    //   })


    // const promiseAll = function(arr) {
    //     return new Promise((resolve,reject) => {
    //         let n = 0
    //         let resolveArr = []
    //         for(let i=0;i < arr.length;i++) {
    //             arr[i]
    //               .then(() => {
    //                     n++
    //                     resolvedArr.push(res)
    //                     if(n === arr.length) resolve(resolvedArr)
    //               })
    //               .catch((err) => {
    //                   reject(err)
    //               })
    //         }
    //     })
    // }

    // test
    // let p1 = new Promise(function (resolve, reject) {
    //         resolve(1)
    //         // reject(new Error('error 1'))
    // })
    
    // let p2 = new Promise(function (resolve, reject) {
    //         resolve(2)
    // })
    
    // let p3 = new Promise(function (resolve, reject) {
    //         resolve(3)
    // })
    
    // promiseAll([p1, p2, p3]).then(res => {
    //     console.log(res) // [1, 2, 3]
    // }).catch(console.log)

    // 12) 每隔一段时间同时向服务器发送多个请求



// 5. 宏任务和微任务
    // 1) 定时器是个典型的宏任务，promise是微任务
// setTimeout(_ => console.log(4))

// new Promise(resolve => {
//   resolve()
//   console.log(1)
// }).then(_ => {
//   console.log(3)
// })

// console.log(2)

// 6. 闭包--彻底理解
// function outer() {
//     var i = 1
//     return function() {
//         console.log(i++)
//     }
// }
// let getnum = outer()
// console.log(getnum)
// getnum()
// getnum()
// i = 1
// getnum()
// getnum()

// 7.防抖截流
    // const debounce = function(fn,delay) {
    //     let timer = null
    //     return (function() {
    //         clearTimeout(timer)
    //         timer = setTimeout(fn,delay)
    //     })()
    // }

    // const throttle = function(fn,delay) {
    //     let timer = null
    //     let flag = true
    //     return (function(){
    //         if(flag) {
    //             timer = setTimeout(function(){
    //                 fn(),
    //                 flag = true
    //             },delay)
    //         }
    //         flag = false
    //     })()
    // }

    // 8.sort的方法实现机制
    // let arr = [3,4,2,13,5,6,2]
    // arr.sort((a,b) => {
    //     return a-b
    // })
    // console.log(arr)

    // 9.map和reduce
    // let arr = [1,2,3,4]
    // let ne = arr.map(item => {
    //     return item + 1
    // })
    // console.log(ne)


// 10.类型相关的坑
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