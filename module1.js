(function(ns){
    'strict';

    window.todo = ns = (window.todo || {})

    ns.toDoList = [];

    $('form').on('submit', function(event){
            event.preventDefault();
            var toDoItem = $('input').val();
            addListItem(toDoItem);
            $('.new-todo').val('');
    });


    /**
     * [Adding a list item and the html elements that get created with it,
     * along with the complete and delete buttons and their visibility.
     * The list item creates an object in the toDoList array and will be
     * tracked in the incomplete-items count.]
     * @param {[string]} toDoItem [the toDoItem name/sentence]
     */
    function addListItem (toDoItem) {
        $('.items')
            .append('<li class="toDoItem"></li>')
            .find('li:last-child')
                .append('<article></article>')
                .find('article')
                    .append('<button class="check"></button>')
                    .append('<p class="todoText">' + toDoItem + '</p>') //toDoItem will be replaced if edited and enter is selected
                    .append('<button class="delete"></button>');
        $('.delete').hide();
        ns.toDoList.push({
            timestamp: Date.now(),
            text: toDoItem,
            complete: false
        });
        $('.incomplete-items').text(ns.toDoList.length);
    }


    $('.items').on('click', '.todoText', edit);
    /**
     * [When a user wants to edit a toDoItem they can click the item,
     * then save it or they can escape the edit function by clicking the
     * footer area or the header area]
     * @param  {[event]}   [event is the specfic item that is clicked to edit]
     * @return {[string]}  [an edited/new string or goes back to inital state]
     */
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
        /**
         * [allows user to escape the edit function]
         * @return void
         */
        function escape() {
            $('.editToDo')
                .replaceWith('<p class="todoText">' + $('.editToDo').val() + '</p>');
        }
    }


    $('.show-active').on('click', '.toDoItem', function());

    function showIncomplete () {
        $('.toDoItem')
            .show();
    }








    // $('.items article').mouseover(deleteListItem);
    //
    // function deleteListItem() {
    //     $('.delete').show();
    // }













})(window.todo);
