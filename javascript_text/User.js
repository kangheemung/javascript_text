function getUser() {
    $.ajax({
        type:"get",
        url : "sample01.json"
    }).done(function(response) {
        console.log(response);
        console.log(response.name);
        console.log(response.age);
        response.favorite.forEach(favorite => {
             let p = $("<p>").append(favorite);
             $("#result").append(p);
        });
        }).fail(function(error){
            console.error(error);
        });
}

