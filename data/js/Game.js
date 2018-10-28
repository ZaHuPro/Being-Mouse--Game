$(document).ready(function () {
    if ($(this).is(':checked')) {
        // Do stuff
        window.typeselect = true;
        window.speedrun = 1000;
    }
    else {

        window.typeselect = false;
        window.speedrun = 1500;
    }
    window.newwin = 0;
    window.newlose = 5;
    window.oldwin = 0;
    window.oldlose = 0;
    window.checkclick = 0;
    window.runwidth = document.getElementById('runbox').style;
    window.runjerry = document.getElementById('jerry');
    window.reqsizeWidth = ((window.runjerry.width) / 2) - 110;
    window.reqsizeHeight = ((window.runjerry.height) / 1.5) - 180;
    window.runjerry = document.getElementById('jerry');
    //document.getElementsById('#slideOne')[1].focus();
    //window.speedrun = 1000;
    //window.typeselect = true;


    //$('#ratio1').click(function () {
    //    alert('Hiiwwww');

    //});

    //$('#ratio2').click(function () {
    //    alert('3333333333');

    //});




    function action() {
        if (window.newwin >= 10) {
            alert("You  win.....")
            window.oldwin++;
            window.newwin = 0;
            window.newlose = 5;
            score();

        }
        else if (window.newlose == 0) {
            window.oldlose--;
            window.newwin = 0;
            window.newlose = 5;
            score();


        }
        else {

        }

    }

    //$(window.runjerry).animate({ top: '250px' });
    $('#jerry').click(function () {
        //$("#jerry").effect("shake");
        //    $("#jerry").toggle("pulsate");
        //$("#jerry").effect("pulsate", { times: 1 }, 20);
        window.newwin++;

        score();
        //action(window.newwin, window.newlose);
        action();
    });

    $('#runbox').click(function () {
        window.checkclick++
        if (window.checkclick != window.newwin) {
            window.checkclick = window.newwin;
            window.newlose--;
            score();
            action();

        }
        else {

        }

    });





    //var conboxw = Element.getElementById('runbox').style.width;
    //var conboxh = Element.getElementById('runbox').style.heigth;


    //$(document).on(':checked', '#ratio1', function () {
    //    var moveintervel = setInterval(run, 1000);
    //    function run() {
    //        var random1 = Math.floor(Math.random() * window.reqsizeHeight);
    //        var random2 = Math.floor(Math.random() * window.reqsizeWidth);

    //        //window.runjerry.style.top = '150px';
    //        //$('#jerry').show();
    //        //setTimeout(function () {
    //        //    $('#jerry').slideUp("fast");
    //        //}, 1200);
    //        //$("#jerry").fadeIn(100);
    //        window.runjerry.style.left = random2 + 'px';
    //        window.runjerry.style.top = random1 + 'px';
    //        //$("#jerry").fadeOut(100);
    //        //$('#jerry').slideDown("fast");

    //        }

    //});



    //var moveintervel = setInterval(runonly, 5000);


    //var moveintervel = setInterval(run, 1000);

    //function run() {
    //    if (btnvalue = 0) {
    //        runtype1();

    //    }
    //    else if (btnvalue = 1) {
    //        runtype2();

    //    }
    //    else {
    //        alert('Error in the Button function....')
    //    }

    //}
    //$("#x").prop("checked", true);
    //$('#sideOne') = true(function () {
    //$('input[name=foo]').attr('checked', true) function() {
    //    alert('hii');

    //});

    $('#slideOne').click(function () {
        if ($(this).is(':checked')) {
            // Do stuff

            window.typeselect = true;
            window.speedrun = 1000;
        }
        else {

            window.typeselect = false;
            window.speedrun = 1500;
        }
    });

    var moveintervel = setInterval(mySelect, 1000);
    function mySelect() {
        window.random1 = Math.floor(Math.random() * 245);
        window.random2 = Math.floor(Math.random() * 760);

        $("#jerry").animate({

            left: window.random2 + 'px',
            top: window.random1 + 'px',
            //left: '760px',
            //top: '245px',

        });

        //if (window.typeselect == true) {

        //    window.runjerry.style.top = '150px';
        //    $('#jerry').show();
        //    setTimeout(function () {
        //        $('#jerry').slideUp("fast");
        //    }, 1200);
        //    $("#jerry").fadeIn(100);
        //    window.runjerry.style.left = window.random2 + 'px';
        //    window.runjerry.style.top = window.random1 + 'px';
        //    $("#jerry").fadeOut(100);
        //    $('#jerry').slideDown("fast");


        //}

        //else if (window.typeselect == false) {

        //    $("#jerry").animate({

        //        left: window.random2 + 'px',
        //        top: window.random1 + 'px',

        //    })



        //}



    }




    //alert('hiidddddddddddddddddddddddddddd');
    //var conboxw = Element.getElementById('runbox').style.width;
    //var conboxh = Element.getElementById('runbox').style.heigth;
    //var jerryIn = 0;
    //window.runjerry.style.top = jerryIn;
    ////if (window.runjerry.style.left = window.reqsizeWidth) {
    //for (jerryIn = 0; jerryIn >= window.reqsizeHeight; jerryIn += 100) {
    //    if (jerryIn == window.reqsizeHeight) {
    //        for (jerryIn = window.reqsizeHeight; jerryIn == 0; jerryIn -= 100) {
    //            $("#jerry").animate({ left: window.reqsizeWidth });
    //            $("#jerry").animate({ top: jerryIn });
    //            $("#jerry").animate({ left: 0 });

    //        }

    //    }
    //    $("#jerry").animate({ left: window.reqsizeWidth });
    //    $("#jerry").animate({ top: jerryIn });
    //    $("#jerry").animate({ left: 0 });












    $('#btnreset').click(function () {
        window.newlose = 0;
        window.newwin = 0;
        window.oldlose = 0;
        window.oldwin = 0;
        score();
        return;

    });

    function score() {
        $('#newlose').text(window.newlose);
        $('#newwin').text(window.newwin);
        $('#oldlose').text(window.oldlose);
        $('#oldwin').text(window.oldwin);
    }


    //var actionintervel = setInterval(action, 100)
});