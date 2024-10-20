// main.js

// Function for smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero button click action


// Service card hover effect
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

/* Contact form submission handling
document.querySelector('.send').addEventListener('click', function () {
    alert("Thank you for reaching out! We will get back to you soon.");
});
*/
document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('.send');
    if (sendButton) {
      sendButton.addEventListener('click', function() {
        alert('Button clicked!');
      });
    }
  });
  

//sign in and sign up 
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add actual sign-up logic here
        alert('Sign Up Successful!'); // Placeholder
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // Sign-in form event listener
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Sign In Successful!'); // Placeholder
        });
    }

    // Other event listeners
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length) {
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.05)';
                card.style.transition = 'transform 0.3s';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
            });
        });
    }
});


// main.js

const userTypeElement = document.getElementById('user-type');
if (userTypeElement) {
    userTypeElement.addEventListener('change', function () {
        const shopkeeperFields = document.getElementById('shopkeeper-fields');
        if (this.value === 'shopkeeper') {
            shopkeeperFields.style.display = 'block';
        } else {
            shopkeeperFields.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Sign Up Successful!');
        });
    }

    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Sign In Successful!');
        });
    }
});


