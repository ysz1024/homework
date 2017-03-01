function middle(){  
    //获取屏幕的高度  
    var heightBig=window.innerHeight;  
    //获取元素的高度  
    var d1=document. (".d1");  
    var heightSmall=parseFloat(window.getComputedStyle(d1).height);  
    d1.style.margin=(heightBig-heightSmall)/2+"px auto";  
}  
middle();  
window.onresize=middle;  
