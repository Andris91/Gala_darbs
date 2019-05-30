// -----------------------Chat---------------------------

function addTask() {
    var inputField = $('#chat-message-input');
    var lieElement = '<ul>';
    var username = $('#chat-username-input');
    var date = new Date();
    lieElement += '<h5>' + username.val() + ' ' + date.toLocaleString() + '</h5>';
    lieElement += '<p>' + inputField.val() + '</p>';
    lieElement += '</ul>';
    lieElement += '<hr>';
    $('#chat-messages').append(lieElement);
    inputField.val('');
    inputField.focus();
}
$('#send-chat-message').click(addTask);

//-------------------------- Register-----------------------

document
    .querySelector('#reg-button')
    .addEventListener('click', function() {
        var username = document.getElementById('username-input');
        var password = document.getElementById('password-input');
        var retype_password = document.getElementById('retype-password');
        var name = document.getElementById('name-input');
        var country_input = document.getElementById('country-input');
        var agree_input = document.getElementById('agree-input');
        if (username.value.length == 0) {
            username.style.border = "1px solid red";
            alert("Username must be filled out");
            return false;
        }
        if (password.value.length < 8) {
            password.style.border = "1px solid red";
            alert("Password must be 8 characters");
            return false;
        }
        if (password.value != retype_password.value || retype_password.value.length == 0) {
            retype_password.style.border = "1px solid red";
            alert("Passwords do not match");
            return false;
        }
        if (name.value.length == 0) {
            name.style.border = "1px solid red";
            alert("Name must be filled out");
            return false;
        }
        if (country_input.value == 'Country') {
            country_input.style.border = "1px solid red";
            alert("Choose a country");
            return false;
        }
        if (agree_input.checked != true) {
            alert("Agree with terms and conditions");
            return false;
        } else {
            alert("Registration sucefull");
            return true;
        }
    });

















// $('#reg-button').click(function () {
//     var inppas = $('#username-input').value;
// //     var inppas = $('#password-input');
// //     var inppas = $('#retype-input');
// //     var name = $('#name-input');
// //     var country = $('#country-input');
// //     var check = $('#agree-input');

//     console.log(inppas);
// //     // if ($('#agree-input')==true) {
//         if ($('#username-input').value.length==null) {
//             alert("Namedsfsdfdsf");
//             return false;
//         };
//         // if ($('#password-input').value.length < 8) {
//         //     alert("Name must ");
//         // }
//     // }
// alert('inppasdsfsdf');
//     // if(check==false){
//     //     alert("Name must be filled out");

//     // }
// });