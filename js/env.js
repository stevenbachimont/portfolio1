

function setTime(ts) {
    var date = new Date(ts);
    $('.time').text(date.toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    })).attr('datetime', date.getHours() + ':' + date.getMinutes());
    $('.date').text(date.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })).attr('datetime', date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    setTimeout(function () {
        setTime(Date.now());
    }, 1000);
}

setTime(Date.now());



function Window(settings) {


    this.id = Date.now();
    this.top = settings.top || 50;
    this.left = settings.left || 20;
    this.title = settings.title || 'New Window';


}




