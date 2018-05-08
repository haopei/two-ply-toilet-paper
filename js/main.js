var buttonThreesCompany = document.querySelector('#PlayThreesCompany');
var buttonFamilyMatters = document.querySelector('#PlayFamilyMatters');
var buttonFullHouse = document.querySelector('#PlayFullHouse');

var audio = new Audio('https://storage.googleapis.com/two-ply-toilet-tissue/quiet-place-mimms.mp3');

// hold the state of currently playing song
var nowPlaying = {
    currentlyPlaying: audio,
}

document.querySelector('#playButton').addEventListener('click', function() {
    var button = this;
    var audioUrl = 'https://storage.googleapis.com/two-ply-toilet-tissue/quiet-place-mimms.mp3'
    var audio = new Audio(audioUrl)
    audio.play().then(function() {
        resetButtonTexts();
        stopPlayingAudio(nowPlaying.currentlyPlaying);
        nowPlaying.currentlyPlaying = audio;
    })
})

buttonFamilyMatters.addEventListener('click', function() {
    var thisButton = this;
    thisButton.innerText = "Stay Tuned...";
    var audioUrl = 'https://storage.googleapis.com/two-ply-toilet-tissue/family-matters-song.mp3';
    var audio = new Audio(audioUrl)
    audio.play().then(function() {
        resetButtonTexts();
        thisButton.innerText = "Now Showing: Family Matters";
        thisButton.classList.add('button__currently-playing');
        stopPlayingAudio(nowPlaying.currentlyPlaying);
        nowPlaying.currentlyPlaying = audio;
    })
})

buttonFullHouse.addEventListener('click', function() {
    var thisButton = this;
    thisButton.innerText = "Stay Tuned...";
    var audioUrl = 'https://storage.googleapis.com/two-ply-toilet-tissue/Full_House_Season_Eight_Extended_Theme_Song.mp3';
    var audio = new Audio(audioUrl)
    audio.play().then(function() {
        resetButtonTexts();
        thisButton.innerText = "Now Showing: Full House";
        thisButton.classList.add('button__currently-playing');
        stopPlayingAudio(nowPlaying.currentlyPlaying);
        nowPlaying.currentlyPlaying = audio;
    })
})

buttonThreesCompany.addEventListener('click', function() {
    var thisButton = this;
    thisButton.innerText = "Stay Tuned...";
    var audioUrl = 'https://storage.googleapis.com/two-ply-toilet-tissue/threes-company-song.mp3';
    var audio = new Audio(audioUrl)
    audio.play().then(function() {
        resetButtonTexts();
        thisButton.innerText = "Now Showing: Three's Company";
        thisButton.classList.add('button__currently-playing');
        stopPlayingAudio(nowPlaying.currentlyPlaying);
        nowPlaying.currentlyPlaying = audio;
    })
})

document.querySelector('#comingUpNext').addEventListener('click', function() {
    this.classList.add('hide');
    document.querySelector('#tvGuide').classList.remove('hide');
})

function stopPlayingAudio(audio) {
    audio.currentTime = 0;
    audio.pause();
}

function resetButtonTexts() {
    // I know... I know...
    buttonFamilyMatters.innerText = 'Family Matters';
    buttonFamilyMatters.classList.remove('button__currently-playing');
    buttonFullHouse.innerText = 'Full House';
    buttonFullHouse.classList.remove('button__currently-playing');
    buttonThreesCompany.innerText = "Three's Company";
    buttonThreesCompany.classList.remove('button__currently-playing');
}