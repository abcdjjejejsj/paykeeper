document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from reloading the page

    const formData = {
        userType: document.getElementById('user-type').value,
        shopName:document.getElementById('shop-name').value,
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    // Send data only when the form is submitted
    fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(errorData.message);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('User registered successfully');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error registering user: ' + error.message);
    });
});
