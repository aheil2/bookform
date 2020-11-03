$(document).ready(function () {
    $("#textBoxOne").change(textboxOneChange);
    $("#textBoxTwo").change(textboxTwoChange);
    //run the change on page load to display the total for default values
    textboxOneChange();
    textboxTwoChange();
    function textboxOneChange() {
        var character = $("#textBoxOne").val();
        character = parseFloat(character);
        var totalPrice = character * 39.99;
        // display
        $("#bookOnePrice").text(totalPrice);
    }
    function textboxTwoChange(event) {
        var character = $("#textBoxTwo").val();
        character = parseFloat(character);
        var totalPrice = character * 14.99;
        // display
        $("#bookTwoPrice").text(totalPrice);
    }
});

