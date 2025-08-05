(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout(() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", function(e) {
                document.dispatchEvent(windowScroll);
            });
        }
    }, 0);
    const newsItems = document.querySelectorAll(".news-item");
    newsItems.forEach(item => {
        item.addEventListener("click", () => {
            alert("Читать полностью...");
        });
    });
    window["FLS"] = true;
})();