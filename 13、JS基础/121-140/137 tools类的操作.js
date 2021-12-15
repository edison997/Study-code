
        //添加类的函数 obj元素  str类
        function addClass(obj,str){
            //这里就是通过正则表达式判断有没有str类，有就不加，没有就加。
            if(!hasClass(obj,str)){
                 obj.className += " "+str;
                }
            };
           

        //检查有没有这个类
        function hasClass(obj,str){
            //正则表达式 \b代表单词边界
            // let reg = /\bb2\b/

            //上面那个不能传变量，要使用构造函数
            let reg = new RegExp("\\b" + str + "\\b");
            // 这里返回一个布尔值
            return reg.test(obj.className);
        };

        //删除一个类的函数
        function removeClass(obj,str){
            //正则检查是否含有类
             let reg = new RegExp("\\b" + str + "\\b");
            //有的话，直接给他变成一个空串
             obj.className = obj.className.replace(reg,"");
        };

        //切换class
        //如果有就删除，没有就添加
        function toggleClass(obj,str){
            if(hasClass(obj,str)){
                removeClass(obj,str);

            }else{
                addClass(obj,str);
            }
        }