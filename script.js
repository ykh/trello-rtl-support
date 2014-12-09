var doms = '.list-card, h1, h2, p',
    inputs = 'textarea';

$(document).ready(function () {
    $(doms).each(function () {
        updateStyle($(this));
    });
});

$('body').on('DOMSubtreeModified', doms, function () {
    updateStyle($(this));
});

$('body').on('input blur focus', inputs, function (e) {
    updateStyle($(this));
});

function updateStyle(target) {
    var regex,
        matched,
        dir,
        align,
        attribute = 'text';
    
    if ($(target).is('textarea')) {
        attribute = 'val';
    }
        
    regex = /[\u0600-\u06FF]/;
    
    matched = target[attribute]().match(regex);
    
    dir = target.css('direction', 'rtl');
    align = target.css('text-align', 'right');
    
    if (matched) {
            target.css('direction', 'rtl');
            target.css('text-align', 'right');
    } else {
        target.css('direction', dir);
        target.css('text-align', align); 
    }
}
