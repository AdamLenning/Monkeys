var increment2=0;
$(document).on("change", ".checkbox", function() {
    $('.sum').html('$' + (increment2 += this.checked ? 1 : -1) + '.00');             
})