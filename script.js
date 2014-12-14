/**
 * Developer: Yaser Khahani
 * URL: https://github.com/ykh/trello-rtl-support
 * 2014
 **/ 
var doms = 'h1, h2, h3, p ,a',
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
        value = '',
        tagName = target[0].tagName,
        rtl,
        ltr;

    rtl = {
        'direction': 'rtl',
        'text-align': 'right'        
    };   
    ltr = {
        'direction': 'ltr',
        'text-align': 'left'        
    };
        
    value = target.text();
    
    if (target.is('textarea') || target.is('input[type=text]')) {
        value = target.val();
    }
    
    if (target.is('a') || tagName === 'H1' || tagName === 'H2' || tagName === 'H3') {
        rtl['unicode-bidi'] = 'embed';
        ltr['unicode-bidi'] = '';
    }
        
    regex = /[\u0600-\u06FF]/;
    
    matched = value.match(regex);
    
    if (matched) {
            target.css(rtl);            
    } else {
        target.css(ltr);        
    }
}
