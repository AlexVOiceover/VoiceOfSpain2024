document.addEventListener("DOMContentLoaded", () => {
  fetch('./ManageVideos/videos.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const videoContainer = document.getElementById('videoContainer');
      const videos = [];

      data.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('sample');
        
        const title = document.createElement('h3');
        title.textContent = video.title;
        
        const videoTag = document.createElement('video');
        videoTag.classList.add('video-iframe');
        videoTag.controls = true;
        
        const source = document.createElement('source');
        source.src = video.src;
        source.type = 'video/mp4';
        
        videoTag.appendChild(source);
        videoElement.appendChild(title);
        videoElement.appendChild(videoTag);
        videoContainer.appendChild(videoElement);

        videos.push(videoTag);

        videoTag.addEventListener('play', () => {
          videos.forEach(v => {
            if (v !== videoTag) {
              v.pause();
            }
          });
        });
      });
    })
    .catch(error => console.error('Error loading videos:', error));
});
