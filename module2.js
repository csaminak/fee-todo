(function(ns){
    'strict';

    window.todo = ns =(window.todo || {})



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



    $('footer').on('click', viewButtons);
    /**
     * [function that selects the code that will run depending on
     * which button was clicked]
     * @param  {[event]}  [button click]
     * @return {[object]} [will return matching toDoList Items]
     */
    function viewButtons(event) {
        console.log(event.target);
        if (event.target.className === 'show-active') {
            $('.complete').hide();
            $('.items')
                .addClass('incompleteItems');
        } else if (event.target.className === 'show-completed') {
            $('.incomplete').hide();
        } else if (event.target.className === 'show-all-active') {
            $('.toDoItem').show();
        } else if (event.target.className === 'clear') {
            $('.complete').remove();
        }
    }

})(window.todo);
