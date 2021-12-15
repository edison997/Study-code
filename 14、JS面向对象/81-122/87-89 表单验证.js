let tel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
let qq = /^[1-9][0-9]{4,}$/;
let myname = /^[\u4e00-\u9fa5]{2,10}$/;
let msg = /^\d{6}$/;
let pas = /^[a-zA-Z0-9.-_]{8,16}$/


let telInput = document.querySelector('#telInput');
let qqInput = document.querySelector('#qqInput');
let nameInput = document.querySelector('#nameInput');
let msgInput = document.querySelector('#msgInput');
let pasInput = document.querySelector('#pasInput')
let passWord = document.querySelector('#passWord')


testForm(tel,telInput);
testForm(qq,qqInput);
testForm(myname,nameInput);
testForm(msg,msgInput);
testForm(pas,pasInput);



function testForm(regName,inputName) {
    inputName.onblur = function () {
        if (regName.test(this.value)) {
            this.nextElementSibling.innerHTML = "恭喜你输入正确";
            this.nextElementSibling.className = "yes";
        } else {
            this.nextElementSibling.innerHTML = "你输入的内容有误";
            this.nextElementSibling.className = "no"
        }
    }
}

passWord.onblur = function () { 
    if(pasInput.value == this.value){
        this.nextElementSibling.innerHTML = "恭喜你输入正确";
        this.nextElementSibling.className = "yes";
    } else {
        this.nextElementSibling.innerHTML = "你输入的内容有误";
        this.nextElementSibling.className = "no"
    }
 }