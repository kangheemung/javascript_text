$("#ele2 button").on("cilck", function () {
    console.log("クリックされました");
    let input = $(this).parent().find("input[type=text]").val();
    $("#result").text(input);
    console.log($(this));
    $('h1');
    $('#header').text();
    console.log($('h1'));
    console.log($('header'));
});

    $('#ele1').cheildren().on("mouseover", function() {
    console.log($(this).text());
});

    console.log('#ele1'.children());
    console.log(typeof $('#ele1').children());
    console.log($('#ele1').children()[0]);
    console.log(document.getElementById('ele1'));

    $('#header');

    $('ele1').children();

