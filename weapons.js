// 1.防抖截流

const debounce = function(fn,delay) {
    let timer = null
    return function() {
        clearTimeout(timer)
        timer = setTimeout(fn,deley)
    }
}


const throttle = function(fn,delay) {
    let timer = null
    let flag = true
    return function() {
        if(flag) {
            timer = setTimeout(function() {
                fn()
                flag =true 
            },delay)
            flag = false
        }
    }
}