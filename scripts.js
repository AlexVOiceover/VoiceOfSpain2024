document.addEventListener('DOMContentLoaded', function () {
	var emailContainer = document.getElementById('email-container');
	if (emailContainer) {
		// Encoded email parts in reverse order
		var encodedEmail = 'moc.cnicnif@80885yijah'.split('').reverse().join('');

		var emailSpan = document.createElement('span');
		emailSpan.style.unicodeBidi = 'bidi-override';
		emailSpan.style.direction = 'rtl';
		emailSpan.innerHTML = encodedEmail
			.split('')
			.map(function (char, index) {
				return index === 11 ? '<span style="display:none">foo</span>' + char : char;
			})
			.join('');

		emailContainer.appendChild(emailSpan);
	}
});

(function () {
	var a, b, c, e, i, f, p, w, g, z, s, r, l;
	z = document;
	s = z.querySelector.bind(z);
	r = Math.random().toString().substring(2);
	l = s('.email-loader-container');
	l.className = '';
	l.id = 'e' + r;
	z = '#e' + r;
	window.addEventListener('load', function () {
		g = s(z + '>canvas');
		w = s(z + '>img');
		if (w.complete && w.naturalHeight !== 0) {
			q();
		} else {
			w.onload = q;
		}
		function q() {
			c = g.width = g.height = w.width;
			f = g.getContext('2d', { willReadFrequently: true });
			f.drawImage(w, 0, 0);
			b = '';
			p = String.fromCharCode;
			w = parseInt;
			e = f.getImageData(0, 0, c, c).data;
			r = [];
			c = 0;
			for (i = 0; i < e.length; i++) {
				c++;
				if (c == 4) {
					c = 0;
					if (e[i] == 0) {
						break;
					}
					continue;
				}
				r.push(e[i] > 127 ? 1 : 0);
				if (r.length >= 7) {
					b += p(w(r.splice(0, 7).join(''), 2));
				}
			}
			try {
				for (i = 0; i < 100; i++) {
					b = atob(b);
				}
			} catch (g) {
				a = '';
				for (i = 0; i < b.length; i += 3) {
					c = p(w(b.substr(i, 3).replace(/\./, ''), 10));
					a += c;
				}
			}
			l.outerHTML = a;
		}
	});
})();