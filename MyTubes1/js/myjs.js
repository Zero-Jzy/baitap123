document.getElementById('btn').onclick = function () {
    mykeyword = document.getElementById('search').value;
    searchTubes(mykeyword)
};
document.getElementById('search').onkeypress = function (e) {
    if (e.which === 13 || e.keyCode === 13) {
        mykeyword = document.getElementById('search').value;

        searchTubes(mykeyword);
    }

};
var mykeyword = 'toilavu';
searchTubes(mykeyword);

function searchTubes(mykeyword) {
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + mykeyword + "&type=video&maxResults=12&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    var xhttp = new XMLHttpRequest();
    var captionText = document.getElementById("caption");

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var jsOject = JSON.parse(xhttp.responseText);
            // console.log(xhttp.responseText);
            var contentImg = '';
            var contentVideo = '';

            for (var i = 0; i < jsOject.items.length; i++) {
                var imgItem = '    <div class="column">\n' +
                    '           <img src="' + jsOject.items[i].snippet.thumbnails.medium.url + '" " onclick="openModal();currentSlide(' + i + ')" class="hover-shadow cursor">\n' +
                    // '           <img id="play" src="img/play.png"'+
                    '             <h4>' + jsOject.items[i].snippet.title + '</h4>' +
                    '    </div>';
                contentImg += imgItem;
                var videoItem = '        <div class="mySlides">\n' +
                    '            <iframe width="100%" height="600px" src="https://www.youtube.com/embed/' + jsOject.items[i].id.videoId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n' +
                    '             <h4 >' + jsOject.items[i].snippet.title + '</h4>' +
                    '        </div>';
                contentVideo += videoItem;

            }
            document.getElementById("row").innerHTML = contentImg;
            document.getElementById("modal-content").innerHTML = contentVideo;

        }
    };
    xhttp.open("GET", YOUTUBE_API, true);
    xhttp.send();
}

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length - 1) {
        slideIndex = 0
    }
    if (n < 0) {
        slideIndex = slides.length - 1
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}