// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  //<div id="player"></div>
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true, //자동재생 여부
      loop: true, //반복 재생 유무
      playlist: "An6LvWQuj_8", //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      //영상이 준비되었을 때
      onReady: function (event) {
        event.target.mute(); //target: 현재 재생되어지고 있는 영상 ,음소거처리
      },
    },
  });
}
