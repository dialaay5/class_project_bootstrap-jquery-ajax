function addUser() {
    try {
        //to find out how many rows there are in a table:
        let x = document.getElementById("frinds").rows.length;
        if (x <= 10) {
            fetch('https://randomuser.me/api?results=1')
                .then(response => response.json())
                .then(response => {
                    $('#frinds').append(`<tr id="tableRow" class="tr"><td>${response.results[0].name.first}</td>
                                 <td>${response.results[0].name.last}</td>
                                 <td>${response.results[0].location.street.name.concat(response.results[0].location.street.number)}</td>
                                 <td>${response.results[0].dob.age > 18}</td>
                                 <td>${response.results[0].gender}</td>
                                 <td><img src=${response.results[0].picture.thumbnail}></td></tr>`
                    )
                });

        }
        else {
            throw Error('cannot add more!!!')
        }
    }
    catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'cannot add more!!!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
}

function removeUser() {
    try {
        let x = document.getElementById("frinds").rows.length;
        if (x > 1) {
            $('#tableRow').remove()
        }
        else {
            throw Error('no more rows to remove!')
        }
    }
    catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'no more rows to remove!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
}







