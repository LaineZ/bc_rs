function log(msg) {
    Window.this.xcall("log_info", msg);
}

function logDebug(msg) {
    Window.this.xcall("log_debug", msg);
}

function httpRequestGet(url, done_callback, failed_callback) {
    const useHttp = Window.this.xcall("request_http");

    if (useHttp) {
        url.replace("https://", "http://");
    }

    Window.this.xcall("http_request_get", url, done_callback, failed_callback);
}

function httpRequestPost(url, body, done_callback, failed_callback) {
    const useHttp = Window.this.xcall("request_http");

    if (useHttp) {
        url.replace("https://", "http://");
    }

    Window.this.xcall("http_request_post", url, body, done_callback, failed_callback);
}

function getTags(done_callback) {
    Window.this.xcall("get_tags", done_callback);
}

function setSettings() {
    const settings = document.getElementById("options-modal");
    Window.this.xcall("set_settings", settings);
}

function setImage(art_id, image) {
    const quality = Window.this.xcall("get_load_artworks");
    const http = Window.this.xcall("artwork_http");

    if (!http) {
        Window.this.xcall("set_image",
        "https://f4.bcbits.com/img/a" + art_id + "_" + quality + ".jpg",
        image, false);
    } else {
        Window.this.xcall("set_image",
        "http://f4.bcbits.com/img/a" + art_id + "_" + quality  + ".jpg",
        image, false);
    }
}

function parseAlbumData(html) {
    return Window.this.xcall("parse_album_data", html);
}

function openInBrowser(url) {
    return Window.this.xcall("open_in_browser", url);
}

function getSettings() {
    return {
        loadArtworks: Window.this.xcall("get_load_artworks"),
    }
}

function saveSettings() {
    Window.this.xcall("save_config");
}