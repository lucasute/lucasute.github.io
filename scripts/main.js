var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    autoHeight: false,
    grabCursor: true,
    watchSlidesProgress: true,
    keyboardControl: true,
    speed: 400,
    effect: 'slide',  //Could be "slide", "fade", "cube", "coverflow" or "flip"
    autoplay: {
        deelay: 100
    },
    coverflowEffect: {
        slideShadows: false,
    },
});
//
// mySwiper.on('slideChange', function(){
//     console.log(mySwiper.activeIndex);
//     if(mySwiper.activeIndex == 5){
//         console.log('dkakdl');
//         setTimeout(function () {
//
//         }, 5000);
//     }
// });

function countDown(second,endMinute,endHour,endDay,endMonth,endYear) {
    var now = new Date();
    second = (arguments.length == 1) ? second + now.getSeconds() : second;
    endYear =  typeof(endYear) != 'undefined' ?  endYear : now.getFullYear();
    endMonth = endMonth ? endMonth - 1 : now.getMonth();  //numero del mese cominciando da 0 esempio 03- marzo
    endDay = typeof(endDay) != 'undefined' ? endDay :  now.getDate();
    endHour = typeof(endHour) != 'undefined' ?  endHour : now.getHours();
    endMinute = typeof(endMinute) != 'undefined' ? endMinute : now.getMinutes();
    var endDate = new Date(endYear,endMonth,endDay,endHour,endMinute,second+1);
    var interval = setInterval(function() {
        var time = endDate.getTime() - now.getTime();
        if (time < 0) {
            return;
        } else {
            var days = Math.floor(time / 864e5);
            var hours = Math.floor(time / 36e5) % 24;
            var minutes = Math.floor(time / 6e4) % 60;
            var seconds = Math.floor(time / 1e3) % 60;
            var text='</div><div>'
            var end='</div></div><div style="float:left;">,</div>'
            document.getElementById('mytimer').innerHTML = '<div> </div>'+
                days+text+'giorni'+end+hours+text+'ore'+end+
                minutes+'minuti'+text+end+seconds+text+'secondi' + '<div></div>';
        }
        now.setSeconds(now.getSeconds() + 1);
    }, 1000);
}
countDown(0,0,15,12,6,2020);

