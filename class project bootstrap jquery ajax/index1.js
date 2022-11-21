const details = {
    First_Name: '',
    Last_Name: '',
    Over_18: false,
    Address: '',
    Email:'',
    Gender: null
}

function sendDetails() {
    try {
        details.First_Name = $('#FirstName').val()
        details.Last_Name = $('#LastName').val()
        details.Over_18 = $('#CheckOver18')[0].checked
        details.Address = $('#address').val()
        details.Email = $('#email').val()
        if (document.getElementById('genderM').checked) {
            details.Gender = $('#genderM').val()
        }
        else if (document.getElementById('genderF').checked) {
            details.Gender = $('#genderF').val()
        }

        if (details.First_Name == '' || details.Last_Name == '' || details.Address == '' || details.Gender == null || details.Email == ''){
            throw Error('something is wrong');
        }
    }
    catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
}

function randomProfile() {
    const details = [{
        First_Name: 'Bella',
        Last_Name: 'Hadid',
        Over_18: false,
        Address: 'Washington',
        Email: 'bellahadid@example.com',
        Gender: 'female'
    },
    {
        First_Name: 'Kim',
        Last_Name: 'Kardashian',
        Over_18: true,
        Address: 'California U.S',
        Email: 'kimkard1@example.com',
        Gender: 'female'
    },
    {
        First_Name: 'Jennifer',
        Last_Name: 'Lopez',
        Over_18: true,
        Address: 'New York',
        Email: 'jennifer1969@example.com',
        Gender: 'female'
    },
    {
        First_Name: 'Oprah',
        Last_Name: 'Winfrey',
        Over_18: true,
        Address: 'Kosciusko, Mississippi',
        Email: 'oprahwinfrey@example.com',
        Gender: 'female'
    },
    {
        First_Name: 'Bill',
        Last_Name: 'Gates',
        Over_18: true,
        Address: 'Seattle Washington U.S',
        Email: 'bill.gates@gatesfoundation.org',
        Gender: 'male'
    }]
    const randomIndex = Math.floor(Math.random() * details.length);
    $('#FirstName').val(details[`${randomIndex}`].First_Name)
    $('#LastName').val(details[`${randomIndex}`].Last_Name)
    $('#CheckOver18')[0].checked = details[`${randomIndex}`].Over_18
    $('#address').val(details[`${randomIndex}`].Address)
    $('#email').val(details[`${randomIndex}`].Email)
    $('#genderM')[0].checked = details[`${randomIndex}`].Gender == 'male'
    $('#genderF')[0].checked = details[`${randomIndex}`].Gender == 'female'
   
}


function xhr1() {
    var xhr = new XMLHttpRequest();
    const results = [{}]
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let arr = JSON.parse(xhr.responseText)
            $('#FirstName').val(arr.results[0].name.first)
            $('#LastName').val(arr.results[0].name.last)
            $('#CheckOver18')[0].checked = arr.results[0].dob.age > 18
            $('#address').val(arr.results[0].location.street.name)
            $('#email').val(arr.results[0].email)
            $('#genderM')[0].checked =arr.results[0].gender == 'male'
            $('#genderF')[0].checked = arr.results[0].gender == 'female'
            
        }
    }

    xhr.open('GET', 'https://randomuser.me/api', true);
    xhr.send();

}

function JQ_ajax() {
    $.ajax({
        url: "https://randomuser.me/api",
        success: response => {
            $('#FirstName').val(response.results[0].name.first)
            $('#LastName').val(response.results[0].name.last)
            $('#CheckOver18')[0].checked = response.results[0].dob.age > 18
            $('#address').val(response.results[0].location.street.name)
            $('#email').val(response.results[0].email)
            $('#genderM')[0].checked =response.results[0].gender == 'male'
            $('#genderF')[0].checked = response.results[0].gender == 'female'
           
        }
    });
}

function fetch1() {
    fetch('https://randomuser.me/api?results=1')
        .then(response => response.json())
        .then(response => {
            $('#FirstName').val(response.results[0].name.first)
            $('#LastName').val(response.results[0].name.last)
            $('#CheckOver18')[0].checked = response.results[0].dob.age > 18
            $('#address').val(response.results[0].location.street.name)
            $('#email').val(response.results[0].email)
            $('#genderM')[0].checked =response.results[0].gender == 'male'
            $('#genderF')[0].checked = response.results[0].gender == 'female'
        });
}




