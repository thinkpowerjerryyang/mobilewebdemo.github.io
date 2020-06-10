$('.awardContent').first().show();

$('#award').change(function () {
    var option = $('#award option:selected');
    var index = option[0].index;
    var $content = $('.awardContent');

    $content.hide();
    $content.each(function (i, j) {        
        if (i === index) {
            $(j).show();
        }
    });
});

