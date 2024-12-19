$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        if (!$('#name').val()) {
            alert('Please enter your name!');
            e.preventDefault();
        }
    });
});
