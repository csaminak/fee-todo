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
            .append('<li class="toDoItem incomplete"></li>')
            .find('li:last-child')
                .append('<article></article>')
                .find('article')
                    .append('<button class="check" ></button>')
                    .append('<p class="todoText">' + toDoItem + '</p>') //toDoItem will be replaced if edited and enter is selected
                    .append('<button class="delete"></button>');
        $('.delete').hide();

        ns.toDoList.push({
            timestamp: Date.now(),
            text: toDoItem,
            complete: false
        });

        incompleteCounter();
    }


    /**
     * [setting the counter for items incomplete]
     * @return {[number]} [incomplete items on toDoList]
     */
    function incompleteCounter() {
        $('.incomplete-items').text(function () {
            var i;
            var incompleteItems = 0;
            for (i=0; i < ns.toDoList.length; i++) {
                if (ns.toDoList[i].complete === false) {
                    incompleteItems += 1;
                }
            }
            return incompleteItems;
        });
    }


    $('.items').on('click', '.check', markComplete);
    /**
     * [marks a toDoItem complete and then updates the object in
     * the toDoList Array, and updates the incompleteCounter]
     * @param  {[event]}   [which will be a click on the complete button]
     * @return {[number]}  [updated incompleteCounter]
     */
    function markComplete(event) {

        var todoText = $(event.target)
            .closest('.toDoItem')
                .toggleClass('complete')
                .removeClass('incomplete')
                .find('.todoText')
                    .text();

        var i;
        for (i=0; i < ns.toDoList.length; i++) {
            if (ns.toDoList[i].text === todoText) {
                ns.toDoList[i].complete = !ns.toDoList[i].complete;
            }
        }

        incompleteCounter();
    }






})(window.todo);
