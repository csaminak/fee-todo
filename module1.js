(function(ns){
    'strict';

    window.todo = ns = (window.todo || {})

    //when page loads
    $('form').on('submit', function(event){
            event.preventDefault();
            var todoItem = $('input').val();
            addListItem(todoItem);
            $('.new-todo').val('');
    });

    //add list item and the following html elements appear with it.
    function addListItem (todoItem) {
        $('.items')
            .append('<li class="listItem"></li>')
            .find('li')
                .append('<article></article>')
                .find('article')
                    .append('<button class="check"></button>')
                    .append('<p>' + todoItem + '</p>') //todoItem will be replaced if edited and enter is selected
                    .append('<button class="delete"></button>');
    }

    //when listItem is clicked, the <p> turn into an input field.
    $('.listItem').on('click', function edit() {

        ('<input class="edit-todo" edit="text" value="">')

    });











})(window.todo);
