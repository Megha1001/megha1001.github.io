$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});


function calculateTimeCompleted(){

    const date1 = new Date('6/17/2019');
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const diffYears = Math.floor(diffDays / 365);
    const diffMonths = Math.round((diffDays - diffYears*365) / 30);
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
    console.log(diffYears + " Years");
    console.log(diffMonths + " Months");

    var timeCompleted = diffYears + " Years";

    if(diffMonths == 1){
        timeCompleted += " and 1 Month";
    } else if(diffMonths > 1 && diffMonths <= 11){
        timeCompleted += " and "+diffMonths+" Months";
    }

    console.log(timeCompleted);
    document.getElementById('time-completed').innerHTML = timeCompleted;
    document.getElementById('capsule-value-time-completed').innerHTML = timeCompleted;
}