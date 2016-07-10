(function(ns){
    'strict';

    window.todo = ns = (window.todo || {})

    ns.toDoList = [];

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
        ns.toDoList.push({
            timestamp: Date.now(),
            text: todoItem,
            complete: false
        })
        $('.delete').hide();
    }

    //when listItem is clicked, the <p> turn into an input field.
    $('.items').on('click', '.todoText', edit);

    function edit(event) {
        $(event.target)
            .replaceWith('<input class="editToDo" type="text" value=' + event.target.innerText + '></input>');

        $('.editToDo').on('keypress', function(event) {
            var editedItem = $('.editToDo').val();
            if(event.keyCode === 13) {
                $('.editToDo')
                    .replaceWith('<p class="todoText">' + editedItem + '</p>')
            }
        });


        if($('header').on('click', event.target, escape));
        if($('footer').on('click', event.target, escape));

        function escape() {
            $('.editToDo')
                .replaceWith('<p class="todoText">' + $('.editToDo').val() + '</p>');
        }
    }






    // $('.items article').mouseover(deleteListItem);
    //
    // function deleteListItem() {
    //     $('.delete').show();
    // }













})(window.todo);
