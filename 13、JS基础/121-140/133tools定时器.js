     //声明一个全局变量 下面关闭定时器的时候要用
        //定时器标识保存在a里面，但是他会影响定时器的指向 ，box1和box2会互相影响，所以这个不能要了
        // let a ;           ======================================================
      
        //因为调用多个，就可以写成一个公用的函数  封装思想  减少代码，提高性能
        //1.第一步就是确定参数  2.考虑情况写判断
/* 
        obj 元素 
         speed 速度 
          range 距离范围 
           attr 要添加的属性 如 top height 等等
            callback 回调函数*/

        function move(obj,speed,range,attr,callback){

            clearInterval(obj.a);

            //获取元素的位置的
            let current = parseInt(getStyle(obj,attr));
                if(current > range){//判断到底是在我们想要去的位置的左边还是右边，如果是元素原来的位置大于我们想要去去的位置，就直接给他赋值为一个负数，就不用让操作的人判断位置了
                    speed = -speed; 
                }

                console.log(current)

                //直接在穿入对象上加一个a属性，镇压也能够就有指向性，就不会混乱了
                obj.a = setInterval(function(){
                //再次获取旧元素的位置
                
                let oldL = parseInt(getStyle(obj,attr));
                //让元素移动起来
                let newL = oldL+speed;

                if(speed<0 && newL<range || speed>0 && newL>range){
                    newL = range;
                }

                obj.style[attr]= newL+"px";

                if(newL == range ){
                    //达到效果，关闭定时器
                    clearInterval(obj.a)
                    //动画执行完毕，调用会带你函数，再次执行其他内容

                    // if(callback){
                    //     callback();
                    // }
                    //这个是为了判断不传回调函数的情况，有就调用，没有就不调用
                    callback && callback();//这个就是等于上面那个
                }
                },10);
        }   
     

                //判断兼容性的问题 ，这里是获取样式通用方法，那里都能用
        function getStyle(obj,name) {//obj 就是传是哪个元素  name 就是css的方法，用字符串

            // if(window.getComputedStyle){//就是在window里面找，有没有这个属性，有的话就返回第一个，没有就返回第二个
            //     return getComputedStyle(obj,null)[name] 
            // // getComputedStyle(box1,null).name   不能这样写，这样把name写死了，要用上面那个获取的方式
            // }else{
            //     return obj.currentStlye[name]
            // }

            //三元运算，和上面的是一个意思
            return window.getComputedStyle?getComputedStyle(obj,null)[name]:obj.currentStlye[name];
            
        }


// ================================================================


// 成功的封装了第一个函数





