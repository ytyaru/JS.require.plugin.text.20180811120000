define(function(require, exports, module) {
    return class Shower {
        Show() {
            require(['require.text!txt/hello.md'], function (txt) {
                console.log(txt);
                alert(txt);
                document.body.innerHTML += txt;
            });
        }
    }
});
