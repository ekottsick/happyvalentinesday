yesBtn.addEventListener("click", () => {
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  videoContainer.style.display = "block";
  loveMessage.style.display = "block";

  // show scrolling vows and start animation via CSS class
  scrollingContainer.style.display = "block";
  scrollingContainer.classList.add("scroll-active");

  // play YouTube video
  player = new YT.Player('videoContainer', {
    height: '180',
    width: '320',
    videoId: 'ur1cb_OztPQ',
    playerVars: { autoplay: 1, rel: 0, mute: 1, start: 67 },
    events: { 'onReady': onPlayerReady }
  });
});
