const xhr = new XMLHttpRequest();
xhr.open('GET', 'classRoom.json', true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);

        console.log('Classroom Name: ' + response.classroomName);
        console.log('Location: ' + response.location);

        console.log('Members:');
        response.members.forEach((member) => {
            console.log('- ' + member.name + ' (' + member.role + ')');
        });
    } else {
        console.error('Failed to load data from classRoom.json');
    }
};
