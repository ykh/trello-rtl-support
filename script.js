/**
 * Developer: Yaser Khahani
 * URL: https://github.com/ykh/trello-rtl-support
 * 2014
 **/ 
var doms = '.list-header, p ,a, .checklist-title, .checklist-item',
    inputs = 'textarea, input[type=text]';

$(document).ajaxComplete(function () {
    $(doms).each(function () {
        updateStyle($(this));
    });
});

$(document).ready(function () {
    $(doms).each(function () {
        updateStyle($(this));
    });
});

$('body').on('input blur focus', inputs, function (e) {
    updateStyle($(this));
});

function updateStyle(target) {
    var regex,
        matched,
        dir,
        align,
        value = '';
        
    value = target.text();
    
    if (target.is('textarea') || target.is('input[type=text]')) {
        value = target.val();
    }
        
    regex = /[\u0600-\u06FF]/;
    
    matched = value.match(regex);
    
    if (matched) {
            target.css('direction', 'rtl');
            target.css('text-align', 'right');
    } else {
        target.css('direction', 'ltr');
        target.css('text-align', 'left');
    }
}
