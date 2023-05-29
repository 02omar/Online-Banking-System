document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'client' && password === 'client') {
        window.location.href = 'client/client.html';
    } else if (username === 'banker' && password === 'banker') {
        window.location.href = 'banker/banker.html';
    } else if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin/admin.html';
    } else {
        alert('Incorrect username or password.');
    }
});