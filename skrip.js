var pilihan = ['batu','kertas','gunting'];
const randomIndex = Math.floor(Math.random() * pilihan.length);
const pilihan_musuh = pilihan[randomIndex];


function playbatu() {
    pilihan = 'batu';
    hide_menu();
    display_player();
    display_computer();
    animation();
    cek();
}

function playkertas() {
    pilihan = 'kertas';
    hide_menu();
    display_player();
    display_computer();   
    animation()    
    cek();
}

function playgunting() {
    pilihan = 'gunting';
    hide_menu();
    display_player();
    display_computer();     
    animation()   
    cek();
}

function cek() {
    if (pilihan===pilihan_musuh)
    {
        document.getElementById("notif-h1").innerHTML = "Draw !!!";
    }
    
    else if
    (
    pilihan==='batu' && pilihan_musuh==='gunting' ||
    pilihan==='gunting' && pilihan_musuh==='kertas' ||
    pilihan==='kertas' && pilihan_musuh==='batu')

    {
        document.getElementById("notif-h1").innerHTML = "You Win !!";
    }

    else{
        document.getElementById("notif-h1").innerHTML = "You Lose !!";
    }
}

function hide_menu() {
    document.getElementById('menu').style.display = "none"
    document.getElementById('match').style.display = "flex"
    document.getElementById('notif').style.display = "flex"
}

function display_computer() {
    if (pilihan_musuh==='batu'){
        var element = document.getElementsByClassName('com-rock')
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = 'flex';}
    }
    else if (pilihan_musuh==='kertas'){
        var element = document.getElementsByClassName('com-paper')
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = 'flex';}
    }
    else {
        var element = document.getElementsByClassName('com-scissors')
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = 'flex';}
    }
}



function display_player() {
    if (pilihan==='batu'){
        var element = document.getElementsByClassName('player-rock')
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = 'flex';}
    }
    else if (pilihan==='kertas'){
        var element = document.getElementsByClassName('player-paper')
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = 'flex';}
    }
    else {
        var element = document.getElementsByClassName('player-scissors')
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = 'flex';}
    }
}

function animation() {
        document.getElementById("tangan-player").classList.add("slide-top");
        document.getElementById("tangan-com").classList.add("slide-bottom");
        document.getElementById("notif").classList.add("scale-in-center");
}

function retry() {
    location.reload(true);
}


