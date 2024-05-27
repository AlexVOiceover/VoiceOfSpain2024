// document.addEventListener("DOMContentLoaded", function() {
//     var emailContainer = document.getElementById('email-container');
//     if (emailContainer) {
//         // Encoded email address
//         var encodedEmail = "aGFqaXk1ODgwOEBmaW5jYWluYy5jb20=";
//         // Decode the email address
//         var decodedEmail = atob(encodedEmail);
//         var emailLink = document.createElement('a');
//         emailLink.href = 'mailto:' + decodedEmail;
//         emailLink.textContent = 'Email me';
        
//         emailLink.classList.add('email-button'); // Apply the CSS class for styling
        
//         emailLink.addEventListener('mouseover', function() {
//             emailLink.style.backgroundColor = '#a51f62';
//         });

//         emailLink.addEventListener('mouseout', function() {
//             emailLink.style.backgroundColor = 'var(--text-color)';
//         });

//         emailContainer.appendChild(emailLink);
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    var emailContainer = document.getElementById('email-container');
    if (emailContainer) {
        // Encoded email parts in reverse order
        var encodedEmail = "moc.cnicnif@80885yijah".split("").reverse().join("");
        
        var emailSpan = document.createElement('span');
        emailSpan.style.unicodeBidi = 'bidi-override';
        emailSpan.style.direction = 'rtl';
        emailSpan.innerHTML = encodedEmail.split('').map(function(char, index) {
            return index === 11 ? '<span style="display:none">foo</span>' + char : char;
        }).join('');
        
        emailContainer.appendChild(emailSpan);
    }
});
