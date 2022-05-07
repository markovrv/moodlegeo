tinyMCEPopup.requireLangPack();

var GeoDialog = {
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
};

tinyMCEPopup.onInit.add(GeoDialog.init, GeoDialog);
