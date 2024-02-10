

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

    // ATTRIBUTES

    this.id = Date.now();
    this.top = settings.top || 50;
    this.left = settings.left || 20;
    this.title = settings.title || 'New Window';
    this.close = settings.close !== undefined ? settings.close : true;
    this.draggable = settings.draggable !== undefined ? settings.draggable : true;
    this.content = settings.content || null;

    // METHODS

    this.show = function () {
        $('#' + this.id).fadeIn(500);
    };

    this.setContent = function (content) {
        this.content = content || null;
        var $content = $('#' + this.id).find('.content');
        if (this.content) {
            this.content.forEach(function (item, index, array) {
                var fileitem = '' +
                    '<div class="file-item">' +
                    '<div class="icon ' + (item.type || '') + '"><i class="fa fa-4x fa-' + (item.icon || 'question') + '"></i></div>' +
                    '<div class="label">' + (item.text || 'unknown') + '</div>' +
                    '</div>';
                $content.append(fileitem);
            });
        }
    };

    // CONSTRUCTOR

    var html = '' +
        '<div id="' + this.id + '" class="window" style="top: ' + this.top + 'px; left: ' + this.left + 'px">' +
        '<div class="header">' +
        '<h1>' + this.title + '</h1>' +
        (this.close ? '<div class="close"><i class="fa fa-times"></i></div>' : '') +
        '</div>' +
        '<div class="content"></div>' +
        '</div>';

    $('main').append(html);
    this.setContent(this.content);

    var windowID = this.id;
    $('#' + this.id).find('.close').on('click', function () {
        $('#' + windowID).fadeOut(200, function () {
            $('#' + windowID).remove();
        });
    });

    if (this.draggable) {
        $('#' + this.id).draggable({
            handle: '.header'
        });
    }
}



