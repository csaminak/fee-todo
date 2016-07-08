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
            .append('<li class="todoItem"></li>')
            .find('li:last-child')
                .append('<article></article>')
                .find('article')
                    .append('<button class="check"></button>')
                    .append('<p class="todoText">' + todoItem + '</p>') //todoItem will be replaced if edited and enter is selected
                    .append('<button class="delete"></button>');
        $('.delete').hide();
        console.log($('.items li').length);
    }

    //when listItem is clicked, the <p> turn into an input field.
    $('.items').on('click', '.todoText', edit);

    function edit(event) {
        $(event.target)
            .replaceWith('<input class="edit-todo" edit="text" value="'+event.target.innerText+'">');
        // $('button').remove();
    }


    // $('.items article').mouseover(deleteListItem);
    //
    // function deleteListItem() {
    //     $('.delete').show();
    // }













})(window.todo);
