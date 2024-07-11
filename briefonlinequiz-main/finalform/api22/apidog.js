const apiKey = 'AIzaSyB_zATOOeSa5p_nt0OdwaI2bnMJ6nG4yoQ';
// The video ID of the YouTube video you want to display
const videoId = 'EGQh5SZctaE';
// URL for the YouTube Data API to get video details
const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoId}&part=snippet`;
// Function to fetch and display a specific video
function fetchAndPlayYouTubeVideo() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items.length > 0) {
                const videoTitle = data.items[0].snippet.title;

                // Create a container for the video player
                const videoContainer = document.getElementById('video-container');

                // Create a div for the YouTube player
                const playerDiv = document.createElement('div');
                playerDiv.id = 'player';
                videoContainer.appendChild(playerDiv);

                // Load the YouTube API script
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                // Define the onYouTubeIframeAPIReady function
                window.onYouTubeIframeAPIReady = function () {
                    new YT.Player('player', {
                        videoId: videoId,
                        events: {
                            'onReady': onPlayerReady,
                        },
                    });
                }

                // Function to start playing the video
                function onPlayerReady(event) {
                    event.target.playVideo();
                }

                // Display the video title
              
            }
        })
        .catch(error => console.error('Error fetching YouTube video:', error));
}

// Call the function to fetch and play the specific video
fetchAndPlayYouTubeVideo();
