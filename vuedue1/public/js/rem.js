window.onload = ()=>{
    function reSize(){
        var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
        if(deviceWidth >= 750){
            deviceWidth = 750
        }
        if(deviceWidth <= 320){
            deviceWidth = 320;
        }
        document.documentElement.style.fontSize = (deviceWidth/7.5)+'px';  
        document.querySelector('body').style.fontSize = 0.3 +'rem';
        //1rem = 100px
        //设计稿是750px 设置一半的宽度 375 那么 1rem = 100px
        
    }
    
    reSize()
    
    window.onresize = function(){
        reSize();
    }
}
