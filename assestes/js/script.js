


// window scroll
$(window).on("scroll", function(){
    var scrollTop =$(window).scrollTop();
    if(scrollTop >=80){
        $('body').addClass('fixed-header');
    }else {
        $('body').removeClass('fixed-header');
    }
});

// Auto typing
var typed = new Typed(".auto-type",{
    string: ["Developer", "sleeping" ,"Eating"],
    typespeed: 150,
    backspeed: 150,
    loop: true
})