// const apiKey = 'AIzaSyB_zATOOeSa5p_nt0OdwaI2bnMJ6nG4yoQ';
// // The video ID of the YouTube video you want to display
// const videoId = 'EGQh5SZctaE';
// // URL for the YouTube Data API to get video details
// const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoId}&part=snippet`;
// // Function to fetch and display a specific video
// function fetchAndPlayYouTubeVideo() {
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             if (data.items.length > 0) {
//                 const videoTitle = data.items[0].snippet.title;

//                 // Create a container for the video player
//                 const videoContainer = document.getElementById('video-container');

//                 // Create a div for the YouTube player
//                 const playerDiv = document.createElement('div');
//                 playerDiv.id = 'player';
//                 videoContainer.appendChild(playerDiv);

//                 // Load the YouTube API script
//                 const tag = document.createElement('script');
//                 tag.src = 'https://www.youtube.com/iframe_api';
//                 const firstScriptTag = document.getElementsByTagName('script')[0];
//                 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//                 // Define the onYouTubeIframeAPIReady function
//                 window.onYouTubeIframeAPIReady = function () {
//                     new YT.Player('player', {
//                         videoId: videoId,
//                         events: {
//                             'onReady': onPlayerReady,
//                         },
//                     });
//                 }

//                 // Function to start playing the video
//                 function onPlayerReady(event) {
//                     event.target.playVideo();
//                 }

//                 // Display the video title
              
//             }
//         })
//         .catch(error => console.error('Error fetching YouTube video:', error));
// }

// // Call the function to fetch and play the specific video
// fetchAndPlayYouTubeVideo();

const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function () {
    links.classList.toggle("show_nav");
})

// ------- youtube API----

//  signup home page

let signupButtonNav = document.getElementById('ccccc')
    signupButtonNav.addEventListener('click', function () {

      window.location.href = '/signup/jason.html';

  });
  let loginButtonNav =document.getElementById('loginButtonNav');
  loginButtonNav.addEventListener('click' , function(){
    window.location.href = '/loginpage/login.html';
  })



  const attemptQuizButtons = document.getElementsByClassName('cardsButtonsHTML');

  // Convert the HTMLCollection to an array for easier iteration
  const buttonArray = Array.from(attemptQuizButtons);
  
  buttonArray.forEach((button) => {
      button.addEventListener('click', () => {
          // Check the 'isLoggedIn' value in localStorage
          const isLoggedIn = localStorage.getItem('isLoggedIn');
  
          if (isLoggedIn === 'true') {
              // User is logged in, so proceed to the quiz page
              window.location.href = '/exploreCourses/brefcard-b.html';
          } else {
              // User is not logged in, redirect to the login page
              window.location.href = '/loginpage/login.html';
          }
      });
  });
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
    loginButtonNav.style.display='none'
    signupButtonNav.textContent= 'LOG OUT'
    signupButtonNav.addEventListener('click' ,(e) =>{
    window.location.href = '/home.html'
    localStorage.setItem('isLoggedIn' ,'false' );
    })
} else {
    
}
srartLearningButton.addEventListener('click' , (e)=>{
if (isLoggedIn === 'true') {
    // User is logged in, so proceed to the quiz page
    window.location.href = '/exploreCourses/brefcard-b.html';
} else {
    // User is not logged in, redirect to the login page
    window.location.href = '/loginpage/login.html';
}

   
})

var apiKey = 'AIzaSyAmdbeZQibSxkJWFlNHJV_1a03uY1BF1mA';
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360', 
    width: '640',  
    videoId: 'EGQh5SZctaE', 
    playerVars: {
      'autoplay': 1, 
      'controls': 1, 
      'showinfo': 0, 
      'rel': 0, 
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {

}

function onPlayerStateChange(event) {

  if (event.data == YT.PlayerState.ENDED) {
 
  }
}
