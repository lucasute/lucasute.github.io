var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 0,
    centeredSlides: false,
    slidesPerView: 1,
    autoHeight: true,
    effect: 'slide',  //Could be "slide", "fade", "cube", "coverflow" or "flip"
    autoplay: {
        deelay: 500
    },
    coverflowEffect: {
        slideShadows: false,
    },
});

function countDown(second,endMinute,endHour,endDay,endMonth,endYear) {
    var now = new Date();
    second = (arguments.length == 1) ? second + now.getSeconds() : second;
    endYear =  typeof(endYear) != 'undefined' ?  endYear : now.getFullYear();
    endMonth = endMonth ? endMonth - 1 : now.getMonth();  //numero del mese cominciando da 0 esempio 03- marzo
    endDay = typeof(endDay) != 'undefined' ? endDay :  now.getDate();
    endHour = typeof(endHour) != 'undefined' ?  endHour : now.getHours();
    endMinute = typeof(endMinute) != 'undefined' ? endMinute : now.getMinutes();
//agiungiamo un secondo alla data finale (il nostro taimer mostrera tempo gia dopo 1 secondo.)
    var endDate = new Date(endYear,endMonth,endDay,endHour,endMinute,second+1);
    var interval = setInterval(function() { //faciamo partire taimer con intervallo di 1 secondo
        var time = endDate.getTime() - now.getTime();
        if (time < 0) {                      //se la data finale impostata è meno di 1 secondo
            clearInterval(interval);
            alert("La data è sbagliata!");
        } else {
            var days = Math.floor(time / 864e5);
            var hours = Math.floor(time / 36e5) % 24;
            var minutes = Math.floor(time / 6e4) % 60;
            var seconds = Math.floor(time / 1e3) % 60;
            var text='</div><div>'
            var end='</div></div><div style="float:left;">,</div>'
            document.getElementById('mytimer').innerHTML = '<div> </div>'+// qui indichiamo il nome del nostro timer mytimer come esempio //
                days+text+'giorni'+end+hours+text+'ore'+end+
                minutes+'minuti'+text+end+seconds+text+'secondi' + '<div></div>';
        }
        now.setSeconds(now.getSeconds() + 1); //aumentiamo il tempo corrente per 1 secondo
    }, 1000);
}
countDown(0,0,15,12,6,2020); //impostiamo timer per ora e la data di scadenza, nel mio esempio per 5 maggio 2019 ore 6 minute 30 e secondi 3   //   </script>

