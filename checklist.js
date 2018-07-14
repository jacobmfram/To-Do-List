var toDoCount = 0;

$("#add-to-do").on("click", function(event) {
    event.preventDefault();

    toDoCount++;
    var itemVal = $("#to-do").val().trim();
    var itemText = $("<p>");
    itemCount = "item-" + toDoCount;
    itemText.attr("id", itemCount);
    itemText.text(" " + itemVal);

    var itemButton = $("<button>");
    itemButton.attr("id", itemCount);

    itemButton.attr("data-to-do");
    itemButton.addClass("checkbox waves-effect waves-light btn");

    itemButton.append("X");

    var item = itemText.prepend(itemButton);

    $("#to-dos").append(item);
    $("#to-do").val("");

});

$(document.body).on("click", ".checkbox", function() {
    var toDoNumber = $(this).attr("id");

    $("#" + toDoNumber).remove();

});