$(document).ready(function() {
    $("#categories").tabs();
    
    //makes categories sortable
    $("ul").sortable({axis:"x", containment:"#categories"});
    
    //makes items sortable with background in open space
    $(".toDoItems").sortable({
        axis:"y", 
        containment:"#categories",
        placeholder: 'placeholder',
        opacity: 0.8});
    
    $("#addCat").click(function() {
        var catName = $("#newCat").val();
        $(`<li class='nav-item'><a class='nav-link' href='#${catName}'><h4>${catName}</h4></a></li>`)
        .appendTo("#category");
        $(`<div id='${catName}' class='toDoItems'>
                <div class="row mx-auto singleItem" contenteditable="true">
                    <div class="col-10 listItems">
                        To do:
                    </div> 
                <div class="col-2">
                    <button class="btn btn-danger"><ion-icon name="checkmark-outline"></ion-icon></button>
                </div>
            </div>

            <div class="row mx-auto singleItem" contenteditable="true">
                <div class="col-10 listItems">
                    To do: 
                </div> 
            <div class="col-2">
                <button class="btn btn-danger"><ion-icon name="checkmark-outline"></ion-icon></button>
            </div>
            </div>
        </div>`).appendTo("#categories");
        });
    
    $("#addItem").click(function() {
        var toDoTask = $("#newItem").val();
        $(`<div class="row mx-auto singleItem" contenteditable="true">
                <div class="col-10 listItems">
                ${toDoTask}
                </div> 
                <div class="col-2">
                    <button class="btn btn-danger"><ion-icon name="checkmark-outline"></ion-icon></button>
                </div>
            </div>`).appendTo('.toDoItems');
        });

})

