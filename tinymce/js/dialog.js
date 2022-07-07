tinyMCEPopup.requireLangPack();

var GeoDialog = {
  // count: 0,
  loadLastGGB: function () {
    var content = tinyMCE.activeEditor.getContent();
    var begin = content.indexOf("ggbBase64");
    if (begin != -1) {
      begin = content.indexOf("ggbBase64") + 11;
      var end = content.indexOf("var applet") - 3;
      appName = content.slice(
        content.indexOf("appName") + 9,
        content.indexOf("width") - 3
      );
      var code64 = content.slice(begin, end);
      var params = {
        appName: `'${appName}'`,
        showToolBar: true,
        showAlgebraInput: true,
        showMenuBar: true,
      };
    } else {
      window.alert("В текстовой области нет аплета GeoGebra!");
    }
    var applet = new GGBApplet(params, true);
    window.onload = function () {
      applet.inject("ggb-element");
    };
    ggbApplet.setBase64(code64);
  },
  insert: function () {
    var content = tinyMCE.activeEditor.getContent();
    if (content.indexOf("<div id='applet_container'></div>") == -1) {
      tinyMCEPopup.editor.execCommand(
        "mceInsertContent",
        false,
        "<div id='applet_container'></div>"
      );
    }
    var divGgb = document.getElementsByClassName(
      "appletParameters notranslate"
    )[0];
    var appName = divGgb.getAttribute("data-param-appname");
    var code = ggbApplet.getBase64();
    var width = 1920;
    var inserted =
      "<!-- begin -->" +
      "<script type='text/javascript' src='https://www.geogebra.org/apps/deployggb.js'></script>" +
      "<script type='text/javascript'>var params={ appName:" +
      `'${appName}'` +
      ", width:" +
      `'${width}'` +
      ", showToolBar: false, scaleContainerClass: 'qtext',showAlgebraInput: false, showZoomButtons: false, autoHeight: true, showMenuBar: false, ggbBase64:" +
      `'${code}'` +
      "};var applet = new GGBApplet(params, true);" +
      "window.onload = function () {applet.inject('applet_container');};" +
      "</script>" +
      "<!-- end -->";
    var begin = content.indexOf("<!-- begin -->");
    if (begin != -1) {
      var end = content.indexOf("<!-- end -->");
      content =
        content.substring(0, begin) + inserted + content.substring(end + 12);
      tinyMCE.activeEditor.setContent(content);
    } else tinyMCEPopup.editor.execCommand("mceInsertContent", false, inserted);
    tinyMCEPopup.close();
  },
  reloadGraphig: function () {
    var params = {
      appName: "graphig",
      showToolBar: true,
      showAlgebraInput: true,
      showMenuBar: true,
    };
    var applet = new GGBApplet(params, true);
    applet.inject("ggb-element");
  },
  reloadGeometry: function () {
    var params = {
      appName: "geometry",
      showToolBar: true,
      showAlgebraInput: true,
      showMenuBar: true,
    };
    var applet = new GGBApplet(params, true);
    applet.inject("ggb-element");
  },
  reload3d: function () {
    var params = {
      appName: "3d",
      showToolBar: true,
      showAlgebraInput: true,
      showMenuBar: true,
    };
    var applet = new GGBApplet(params, true);
    applet.inject("ggb-element");
  },
};
