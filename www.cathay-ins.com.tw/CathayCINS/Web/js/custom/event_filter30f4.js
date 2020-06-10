var $card = $('.card');

var lst_function = {    
    showall: function () {
        $card.each(function (idx, val) {
            $(val).show();
        });
    }
    ,
    filtercore: function (filter) {
        $card.hide();
        $card.each(function (idx, val) {             
            var arrfilter = $(this).data('arr').split(',');           
            $.each(arrfilter, function (idx, item) {
                if (item === filter) {
                    $(val).show();
                    return;
                }
            });
        });
    }
};

$('#filter').change(function () {
    var $option = $('#filter option:selected');
    var $filter = $option.data('filter');
    if ($filter === 'all') {
        lst_function.showall();
    } else {
        lst_function.filtercore($filter);
    }
});