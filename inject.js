(function () {
    console.log("injected by scrollox");
    var css = 'body::-webkit-scrollbar{ width:10px }body::-webkit-scrollbar-track{background:transparent}body::-webkit-scrollbar-thumb{background:rgba(66,67,68,.7);border-radius:6px;}';
    var style = document.createElement('style');
    style.innerHTML = css;

    // Get the first script tag
    var ref = document.querySelector('script');

    // Insert our new styles before the first script tag
    ref.parentNode.insertBefore(style, ref);
    

})();