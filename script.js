function askName() {
    let username = prompt('Lütfen Adınızı giriniz');
    document.querySelector('.greeting').innerHTML = `Merhaba <strong>${username}</strong>, Hoş Geldin!`;
    document.querySelector('strong').style.color = '#ffbf5e';
}

function showTime() {

    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    switch (day) {
        case 0:
            day = "Pazar";
            break;
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
    }

    document.querySelector('.date-info').innerHTML = `${day} günü, ${hour}:${minute}:${second}`;
}

askName();
setInterval(showTime, 1000);