function myModule() {
    let msg = "Hello World"

    function doSome() {
        console.log("doSome " + msg.toUpperCase())
    }

    function doOther() {
        console.log("doOther " + msg.toLowerCase())
    }

    //返回两个方法
    return {
        doSome: doSome,
        doOther: doOther
    }
}

(function myModule() {
    let msg = "Hello World"

    function doSome() {
        console.log("doSome " + msg.toUpperCase())
    }

    function doOther() {
        console.log("doOther " + msg.toLowerCase())
    }

    //自执行函数向外暴露的方法
    window.module2 = {
        doSome: doSome,
        doOther: doOther
    }    
      
    }

)()