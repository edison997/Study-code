let that;

class Tab {
    constructor(id) {
        //把constructor的this，保存在taht中
        that = this;
        //下面就是获取要使用的各种元素
        this.tabB = document.querySelector(id);
        this.add = this.tabB.querySelector(".add")
        this.ul = this.tabB.querySelector("ul")
        this.secF = this.tabB.querySelector(".secF")
        //初始化函数，给他一上来就让他执行，绑定点击事件
        this.init();
        //  console.log(this.lis)
    }

    //获取元素，需要重复使用的元素
    updateTab() {
        this.lis = this.tabB.querySelectorAll("li");
        this.sec = this.tabB.querySelectorAll("section")
        this.remove = this.tabB.querySelectorAll(".closeSpan")
        this.spans = this.tabB.querySelectorAll(' li span:first-child')
    }
    //初始化函数
    init() {
        //因为新添加的内容上没有这些事件，获取添加后的所有元素，然后给这些元素绑定点击事件
        this.updateTab();
        //添加按钮的点击事件，调用添加事件
        this.add.onclick = this.addTab
        //init 初始化操作让相关元素绑定事件
        for (let i = 0; i < this.lis.length; i++) {
            //给每个li添加index属性，以便更好的找到对应的li（相当于是给li这个对象添加属性
            this.lis[i].index = i;
            console.log(this.lis)
            //这里是调用切换事件
            this.lis[i].onclick = this.toggleTab;
            //这里是调用删除事件
            this.remove[i].onclick = this.removeTab;
            //双击事件
            this.spans[i].ondblclick = this.editTab;
            this.sec[i].ondblclick = this.editTab;
        }
    }

    //切换
    toggleTab() {
        //切换时，先清除所有的类，然后再添加
        that.clearClass();
        console.log(this.index)
        //因为是循环的lis  所以这里用this
        this.className = "liActive";
        //而lis 里面没有sec属性，所以要用constructor中的sec，所以用that
        that.sec[this.index].className = "secActive"
    }

    clearClass() { //清除类
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = " ";
            this.sec[i].className = " ";
        }
    }
    //添加
    addTab() {
        let random = Math.random()
        that.clearClass();
        // that.ul.innerHTML += `<li>测试3</li>`;
        let li = '<li class="liActive"><span>新增</span><span class="closeSpan">x</span></li>';
        let sec = '<section class="secActive">新增' + random + '</section>'
        //添加li节点
        that.ul.insertAdjacentHTML("beforeend", li)
        that.secF.insertAdjacentHTML("beforeend", sec)
        //然后再调用初始化函数，为新增的绑定上点击事件
        that.init();
    }

    //删除
    removeTab(e) {
        //阻止冒泡，因为给li和里面的span都绑定了点击事件，会产生冒泡
        e.stopPropagation();
        //因为span没有idnex,借用父元素的index
        let index = this.parentNode.index
        console.log(index);
        //删除对应的lis 和 sec
        that.lis[index].remove();
        that.sec[index].remove();
        //再次初始化函数
        that.init();
        //如果他是打开的就结束执行了
        if (document.querySelector(".liActive")) return;
        //如果没有打开，就自动打开他的上一个，这里用到了click事件
        index--;
        that.lis[index] && that.lis[index].click();

    }
    //修改
    editTab() {
        //先获取span里面的值
        let str = this.innerHTML;
        //双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        
        // alert(111)
        this.innerHTML = '<input type="text"/>'
        //获取span中的第一哥子元素
        let input = this.children[0];
        //把他的值换成开始span里面的值
        input.value = str;
        //让他双击后就是选中的状态
        input.select();
        //失焦的时候就把修改的值添加到span里
        input.onblur = function(){
            //这个this指向的是input
            this.parentNode.innerHTML = this.value;
        }

        input.onkeyup = function(e){
            if(e.keyCode === 13){
                this.blur();
            }
        }
    }

}
new Tab("#tabB");