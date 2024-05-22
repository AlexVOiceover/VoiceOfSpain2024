document.addEventListener('DOMContentLoaded', () => {
	fetch('./ManageAudios/audios.json')
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			return response.json()
		})
		.then((data) => {
			const audioContainer = document.getElementById('audioContainer')
			const audios = []

			data.forEach((audio) => {
				const audioElement = document.createElement('div')
				audioElement.classList.add('sample')

				const title = document.createElement('h3')
				title.textContent = audio.title

				const audioTag = document.createElement('audio')
				audioTag.controls = true

				const source = document.createElement('source')
				source.src = audio.src // Make sure your JSON file uses 'src' as the key
				source.type = 'audio/mpeg'

				audioTag.appendChild(source)
				audioElement.appendChild(title)
				audioElement.appendChild(audioTag)
				audioContainer.appendChild(audioElement)

				audios.push(audioTag)

				audioTag.addEventListener('play', () => {
					audios.forEach((a) => {
						if (a !== audioTag) {
							a.pause()
						}
					})
				})
			})
		})
		.catch((error) => console.error('Error loading audios:', error))
})
