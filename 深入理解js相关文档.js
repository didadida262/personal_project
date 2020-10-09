// Object.defineProperty(test,'test',{
//     value: 'test',
//     enumerable: true,
//     writable: true,
//     configurable: true
// })





// 1.this指向问题
let alex = {
    name: 'alex',
    sayHello: function(age,tall) {
        console.log('i am ' + this.name + ',this year i am ' + age + ' years old... and i am ' + tall + ' m')
    },
    test: function(){
        console.log("this:",this)
    },
    test2: () => {
        console.log("this:",this)
    }
}

let bob = {
    name: 'bob',
}


// Function.prototype.myCall = function(...args) {
//     const target = args[0]
//     target._f = this
//     target._f(...args.slice(1))
//     delete target._f
// }

// Function.prototype.myApply = function(...args) {
//     const target = args[0]
//     target._f = this
//     target._f(...args[1])
//     delete target._f
// }

// Function.prototype.myBind = function(...args) {
//     const target = args[0]
//     target._f = this
//     return () => {
//         target._f(...args.slice(1))
//         delete target._f
//     }
// }
// // 上述代码，堪称完美


// alex.sayHello.myCall(bob,26,1.65)
// alex.sayHello.myApply(bob,[26,1.65])
// alex.sayHello.myBind(bob,26,1.65)()

// 习题轰炸
// 1). 默认绑定
    // function a(){
    //     const user = '剃了胡子';
    //     console.log(this.user); // undefined
    //     console.log(this); // window
    // }
    // a(); // 这里相当于 window.a();
    // this 最终指向的是调用它的对象，这里的函数a实际是被 window 对象所点出来的

    // const o = {
    //     a: 10,
    //     b: {
    //         a: 12,
    //         fn: function(){
    //             console.log(this.a); // undefined
    //             console.log(this); // window
    //         }
    //     }
    // }
    // const j = o.b.fn;
    // j();

// 2). 隐式绑定
    // const a = {
    //     user: '剃了胡子',
    //     fn: function(){
    //         console.log(this.user);// 剃了胡子
    //         console.log(this);// {user: '剃了胡子', fn: ƒ}
    //     }
    // }

    // a.fn();//this 执行时被它的上一级对象 o{user: "剃了胡子", fn: ƒ} 调用

// 3). 当this遇到return，这里其实可以考察对new的理解
    // function fn(){
    //     this.user = '剃了胡子';
    //     return {};
    // }
    // const fn2 = function() {
    //     this.user = "nima"
    //     return {}
    // }

    // let a = new fn();
    // console.log("a:",a.user);// undefined,因为return了一个空对象

    // function fn(){
    //     this.user = '剃了胡子';
    //     return function() {

    //     }
    // }
    // const a = new fn;
    // console.log(a.user);// undefined

    // function fn(){
    //     this.user = '剃了胡子';
    //     return 1
    // }
    // var a = new fn;
    // console.log(a.user); // 剃了胡子，因为1是数字不是对象类型，防不胜防啊
    
    // function fn() { 
    //     this.user = '剃了胡子'; 
    //     return undefined; 
    // } 
    // var a = new fn; 
    // console.log(a.user); //剃了胡子

    // function fn() { 
    //     this.user = '剃了胡子'; 
    //     return null; 
    // } 
    // var a = new fn; 
    // console.log(a.user); //剃了胡子，null比较特殊


// 作用域相关--被一图科技搞死
    // 1)
    // part1 考察function的变量提升高于var
    // console.log(a);
    // function a() {};
    // console.log(a);
    // var a = 1;
    // console.log(a);

    // // part2--这尼玛考察啥？---还是考察变凉提升
    // var foo = 1;
    // console.log(foo); 
    // function foo() {};
    // console.log(foo); 

    // 2)
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

//  ======================================================================

// 2.new 一个对象发生了啥,prototype指向原型对象
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
    //     console.log('err')
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

// 拓展:每秒钟发出一个ajax请求
// let c = 0
// const send = function(){
//     const m =setInterval(function() {
//         c++
//         console.log("hahah")
//         if(c>10) clearInterval(m)

//     },2000)
// }
// send()




// 5). return抛出错误并不会捕获catch还是走的then
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
    //                 reject(err)
    //             })
    //         }) 
    //     })
    // }


    // const promiserace = function(arr) {
    //     return new Promise((resolve,reject) => {
    //         let n = 0
    //         arr.foreach(promise => {
    //             promise
    //               then(res => {
    //                   resolve(res)
    //               })
    //               .catch(err => {
    //                   n++
    //                   if(n === arr.length) reject(err)
    //               })
    //         })
            
    //     })
    // }


// 5. 宏任务和微任务
    // 1) 定时器是个典型的宏任务，promise是微任务
        // setTimeout(() => console.log(4))
        // new Promise(resolve => {
        //   resolve()
        //   console.log(1)
        // }).then(_ => {
        //   console.log(3)
        // })
        // console.log(2)

        // 2).就是说，并不是要等promise包含的语句快全部执行完毕才继续，依旧是循环---不知道说的啥。。。。
        // console.log(1)
        // setTimeout(() => {
        //     console.log(2);
        //     Promise.resolve().then(() => {
        //        console.log(3)
        //     });
        // }, 0);
        
        // new Promise((resolve) => {
        //     console.log(4);
        //     resolve();
        // })
        // .then(() => {
        //     console.log(5);
        //     setTimeout(() => console.log(6), 0)
        // });
        // console.log(7);

        // 3).惭愧啊，下面代码给了我如何每隔一秒发送一个请求的解决方案
        // const syncFunc = () => {
        //     const time = new Date().getTime();
        //     while(true) {
        //       if(new Date().getTime() - time > 2000) {
        //         break;
        //       }
        //     }
        //     console.log(2);
        //   }
        //   console.log(1);
        //   syncFunc();
        //   console.log(3);

        // 4).
        // console.log('outer');
        // setTimeout(() => {
        //   setTimeout(() => {
        //     console.log('setTimeout');
        //   }, 0);
        //   setImmediate(() => {
        //     console.log('setImmediate');
        //   });
        // }, 0);

        // console.log('outer');
        
// -------------------
        // setTimeout(() => {
        // console.log('setTimeout');
        // }, 0);

        // setImmediate(() => {
        // console.log('setImmediate');
        // });

        
          
          

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

    // private debounce = (fn: any,delay: any) => {
    //     clearTimeout(this.timer)
    //     this.timer = setTimeout(fn,delay)
    // }
  
  
    // private throttle = (fn: any, delay: any) => {
    //   if(this.flag) {
    //     this.flag = false
    //     this.timer = setTimeout(() => {
    //       fn()
    //       this.flag = true
    //     }, delay)
    //   }
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

// =================================================================
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

// instance 判断一个变量是否是另一个变量的实例

// constructor,null和undefined symbol不存在constructor,可以用来判断数组
    // const a = []
    // console.log(a.constructor === Number)
    // console.log(a.constructor === String)
    // console.log(a.constructor === Boolean)
    // // console.log(a.constructor === symbol)
    // console.log(a.constructor === Object)
    // console.log(a.constructor === Function)
    // console.log(a.constructor === Array)

    // Object.prototype.toString.call()，最保险
    // console.log('Object.prototype.toString.call',Object.prototype.toString.call(''))

// ==========================================================================================

// 11.函数柯里化及其通用封装
    // 我们知道reduce这个方法其实就是，可以将对数组做累计的操作
    // const arr = [1,2,3,4,5]
    // function add(...args) {
    //     return args.reduce((a,b) => a+b)
    // }
    // console.log(add(1)(2))

// ==========================================================================================


// 12.正则匹配相关 
    // const test = "07751770896"
    // var result = "hello".replace(/^|$/g, '#');

    // 匹配一个字符串是否有数字字母下划线组成
    // const regex = /^[0-9a-zA-Z_]{1,}$/g
    // const regex = /^[0-9a-zA-Z_]+$/g
    // 上述两者等价

    // 完全匹配
    // const regex = /_?/

    // 匹配一个字符串是否为合法的电话号码,得视情况而定
    // const regex = /^1[0-9]{11}/g

    // 匹配以某字符开头
    // const regex = /^1.*/g

    // 匹配一个字符串是否为合法的email
    // const regex = /^[/w-]+(/.[/w-]+)*@[/w-]+(/.[/w-]+)+$/g
    // console.log(regex.test(test))
    

// 13.定时器是按照时间长短依次塞入宏任务队列，并不是先进先出 

// console.log("start")
// setTimeout(() => {
//     console.log("set")
// },5000)
// // setTimeout(() => {
// //     console.log('set2')
// // },0)
// console.log("end")




