document.addEventListener("DOMContentLoaded", function() {
    var emailContainer = document.getElementById('email-container');
    if (emailContainer) {
        // Encoded email parts
        var encodedUsername = ["j", "a", "v", "i", "e", "r", "v", "o", "i", "c", "e"];
        var encodedDomain = ["g", "o", "o", "g", "l", "e", "m", "a", "i", "l", ".", "c", "o", "m"];
        
        // Decode the parts into a single email string
        var decodedUsername = encodedUsername.join('');
        var decodedDomain = encodedDomain.join('');
        var email = decodedUsername + '@' + decodedDomain;
        
        var emailLink = document.createElement('a');
        emailLink.href = 'mailto:' + email;
        emailLink.textContent = 'Email me';
        
        emailLink.classList.add('email-button'); // Apply the CSS class for styling
        
        emailLink.addEventListener('mouseover', function() {
            emailLink.style.backgroundColor = '#a51f62';
        });

        emailLink.addEventListener('mouseout', function() {
            emailLink.style.backgroundColor = 'var(--text-color)';
        });

        emailContainer.appendChild(emailLink);
    }
});
