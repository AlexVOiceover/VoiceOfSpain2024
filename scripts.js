document.addEventListener('DOMContentLoaded', function () {
	var emailContainer = document.getElementById('email-container')
	if (emailContainer) {
		var email = 'hajiy58808' + '@' + 'fincainc.com'
		var emailLink = document.createElement('a')
		emailLink.href = 'mailto:' + email
		emailLink.textContent = 'Email me'
		emailContainer.appendChild(emailLink)
	}
})
