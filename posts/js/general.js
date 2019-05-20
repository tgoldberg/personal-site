$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#top-nav').addClass('floatingNav');
    } else {
        $('#top-nav').removeClass('floatingNav');
    }
});

window.onload = setShareLinks;

function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url,"NewWindow",params);
}

  function setShareLinks() {
    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent(jQuery("meta[property='og:description']").attr("content"));


    jQuery(".social-share-twitter").on("click", function() {
        url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
        socialWindow(url);
    });

}
