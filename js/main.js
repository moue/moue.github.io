(function(global, $){
    $('.gallery-items').imagelistexpander({
        prefix: "gallery-"
    });
})(this, jQuery)

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#demo-vid").fitVids();
});