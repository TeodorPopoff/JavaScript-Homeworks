var main = function() {
    var itemNum = 0;
    var sectionNum = 0;
    $('.addItem').on('click', function() {
        var $currentSection = $(this).parent().parent().children('.list');
        var item = $('.itemContent').val();
        $('<input type="checkbox">').appendTo($currentSection);
        $('<div class="item">').text(item).appendTo($currentSection);
        itemNum += 1;
    });

    $('#addSection').on('click', function() {
        sectionNum += 1;
        var item = $('.sectionName').val();
        $('div#container').append(
            '<section id="' + sectionNum + '">' +
            '<div class="list" id="list' + sectionNum + '"><p class="list-title">' + item + '</p></div>' +
            '<div class="add">' +
            '<input class="itemContent" type="text" placeholder="Add item..." />' +
            '<button class="addItem">+</button>' +
            '</div>' +
            '</section>'
        );

        var $addSectionWrapper = $('#addSectionWrapper');
        $('#' + sectionNum).after($addSectionWrapper);
    });

    $('input').on('click', function() {
        var $sibling = $(this).next();
        $sibling.toggleClass('checkedItem');
    });
};

$(document).ready(main);