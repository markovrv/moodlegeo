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
        content.IndexOf("appName") + 9,
        content.IndexOf("width") - 3
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
    tinyMCEPopup.editor.execCommand(
      "mceInsertContent",
      false,
      "<div id='applet_container'></div>"
    );
    var content = tinyMCE.activeEditor.getContent();
    var divGgb = document.getElementsByClassName("appletParameters")[0];
    var appName = divGgb.getAttribute("data-param-appname");
    var code = ggbApplet.getBase64();
    var width = document.getElementsById("applet_container")[0].offsetWidth;
    var inserted =
      "<!-- begin -->" +
      "<script type='text/javascript' src='https://www.geogebra.org/apps/deployggb.js'></script>" +
      "<script type='text/javascript'>var params={ appName:" +
      `'${appName}'` +
      ", width:" +
      `'${width}'` +
      ", height: 520, showToolBar: false, showAlgebraInput: false, showZoomButtons: true, autoHeight: true, showMenuBar: false, ggbBase64:" +
      `'${code}'` +
      "};var applet = new GGBApplet(params, true);" +
      "window.onload = function () {applet.inject('applet_container');};" +
      "</script>" +
      "<!-- end -->";
    var begin = content.IndexOf("<!-- begin -->");
    if (begin != -1) {
      var end = content.IndexOf("<!-- end -->");
      content = content.substring(0, begin) + inserted + content.substring(end);
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
