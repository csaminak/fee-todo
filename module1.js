(function(ns, $){
    'strict';

    window.todo = ns = (window.todo || {})


    $('form').on('submit', function(event){
            event.preventDefault();
            var listItem = $('input').val();
            addListItem(listItem);
    });


    function addListItem (listItem) {
        $('.items')
            .append('<li>' + listItem + '</li>');
    }











})(window.todo, window.jquery);
