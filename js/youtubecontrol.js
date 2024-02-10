
function stopVideo() {
    var iframe = document.getElementById("youtubeVideo1");
    var iframeSrc = iframe.src;


    iframe.src = iframeSrc + "?enablejsapi=1";

    iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}