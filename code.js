$(document).ready(function () {
    $("#textBoxOne").change(textboxOneChange);
    $("#textBoxTwo").change(textboxTwoChange);
    //run the change on page load to display the total for default values
    var grandTotal = 0;
    var totalPriceOne = 0;
    var totalPriceTwo = 0;
    textboxOneChange();
    textboxTwoChange();
    function textboxOneChange() {
        var character = $("#textBoxOne").val();
        character = parseFloat(character);
        totalPriceOne = character * 39.99;
        grandTotal = totalPriceOne + totalPriceTwo;
        // display
        $("#bookOnePrice").text("$"+totalPriceOne.toFixed(2));
        $("#grandTotal").text("$" + grandTotal.toFixed(2));
    }
    function textboxTwoChange() {
        var character = $("#textBoxTwo").val();
        character = parseFloat(character);
        totalPriceTwo = character * 14.99;
        grandTotal = totalPriceOne + totalPriceTwo;
        // display
        $("#bookTwoPrice").text("$"+totalPriceTwo.toFixed(2));
        $("#grandTotal").text("$" + grandTotal.toFixed(2));
    }
});

