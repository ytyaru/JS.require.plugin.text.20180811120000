require.config({
    paths: {
        "require.text": "js/lib/require/plugin/text",
    }
});
//requirejs(['js/app/main.js']);
require(['require.text!txt/hello.md'], function (txt) {
    console.log(txt);
    alert(txt);
});

