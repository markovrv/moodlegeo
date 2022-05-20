tinyMCEPopup.requireLangPack();

var GeoDialog = {
  init: function  () {
    // здесь пишем код инициализации.
    // должна быть доступна переменная tinymce.activeEditor
  },
  insert: function () {
    tinyMCE.activeEditor.setContent("");
    var code = ggbApplet.getBase64();
    var inserted =
      "<p><div id='applet_container'></div>" +
      "<script type='text/javascript' src='https://www.geogebra.org/apps/deployggb.js'></script>" +
      "<script type='text/javascript'>var params={appName: 'graphig', width: 720, height: 520, showToolBar: false, showAlgebraInput: false, showMenuBar: false, ggbBase64:" +
      `'${code}'` +
      "};var applet = new GGBApplet(params, true);" +
      "window.onload = function () {applet.inject('applet_container');};" +
      "</script></p>";
    tinyMCEPopup.editor.execCommand("mceInsertContent", false, inserted);
    tinyMCEPopup.close();
  },
  reloadGraphig: function () {
    var params = {
      appName: "graphig",
      width: window.screen.width - 100,
      height: window.screen.height - 100,
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
      width: window.screen.width - 100,
      height: window.screen.height - 100,
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
      width: window.screen.width - 100,
      height: window.screen.height - 100,
      showToolBar: true,
      showAlgebraInput: true,
      showMenuBar: true,
    };
    var applet = new GGBApplet(params, true);
    applet.inject("ggb-element");
  },
};

tinyMCEPopup.onInit.add(GeoDialog.init, GeoDialog);
