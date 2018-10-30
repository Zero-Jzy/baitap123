var youtube_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs"
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var jsOject = JSON.parse(xhttp.responseText);
        var imgAudios='';
        for (var i = 0; i < jsOject.length; i++) {
            var img='    <div class="column">\n' +
                '           <img onclick="changeAudio(\''+jsOject[i].link+'\')" src="' + jsOject[i].thumbnail + '"  class="hover-shadow cursor">\n' +
                '    </div>';
            imgAudios+=img;
        }
        document.getElementById('img').innerHTML=imgAudios;

    }
};
xhttp.open("GET", youtube_API, true);
xhttp.send();
function changeAudio(link) {
    document.getElementById('source').src=link;

}
document.getElementById('play').onclick=function () {
    document.getElementById('audio').play();
};
