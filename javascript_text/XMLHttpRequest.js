let xhr = new XMLHttpRequest();
xhr.open("GET", "./text.json");
xhr.responseType = "json";

xhr.onload = function() {
    console.log(xhr.response.message);
};

let xhr = new XMLHttpRequest();
xhr.open("GET", "./group.json");
xhr.responseType = "json";

xhr.onload = function() {
    for (let key in xhr.response) {
        for (let value in xhr.response[key]) {
            console.log(key + " : " + xhr.response[key][value]);
        }
    }
};

xhr.send();
