# このソフトウェアについて

　[require.js](http://requirejs.org/)のプラグイン[text](https://requirejs.org/docs/download.html#text)でテキストファイルを読み込む方法。[demo](https://ytyaru.github.io/JS.require.plugin.text.20180811120000)

# コード

```javascript
require.config({
    paths: {
        "require.text": "js/lib/require/plugin/text",
    }
});
require(['require.text!txt/hello.md'], function (txt) {
    alert(txt);
});
```

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * Chromium 56

# ライセンス

　このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

　使用ソフトウェアは以下。

Library|License|Copyright
-------|-------|---------
[require](http://requirejs.org/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright jQuery Foundation and other contributors](https://github.com/requirejs/requirejs/blob/master/LICENSE)
[require domReady](https://github.com/requirejs/domReady)|[MIT](https://opensource.org/licenses/MIT)|[
Copyright jQuery Foundation and other contributors](https://github.com/requirejs/domReady/blob/master/LICENSE)
[require text](https://github.com/requirejs/text)|[MIT](https://opensource.org/licenses/MIT)|[
Copyright jQuery Foundation and other contributors](https://github.com/requirejs/text/blob/master/LICENSE)

