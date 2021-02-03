console.log("I am loaded");

$(".expandContent").click(function () {

    $header = $(this);
    //getting the next element
    $icon = $(this).children('i').eq(0);
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div


        if ($content.is(":visible")) {
            $icon.removeClass("fa fa-chevron-circle-down");
            $icon.addClass("fa fa-chevron-circle-up");
        }
        else {
            $icon.removeClass("fa fa-chevron-circle-up");
            $icon.addClass("fa fa-chevron-circle-down");
        }
        // $header.text(function () {
        //     //change text based on condition
        //     return $content.is(":visible") ? "Collapse" : "Expand";
        // });
    });

});
