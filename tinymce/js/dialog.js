tinyMCEPopup.requireLangPack();

var GeoDialog = {
  insert: function () {
    tinyMCE.activeEditor.setContent("");
    var code = "";
    var inserted =
      "<p><div id='applet_container'></div>" +
      "<script type='text/javascript' src='https://www.geogebra.org/apps/deployggb.js'></script>" +
      "<script type='text/javascript'>var params={appName: 'graphig', width: 720, height: 520, showToolBar: false, showAlgebraInput: false, showMenuBar: false, ggbBase64:" +
      "'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'" +
      "};var applet = new GGBApplet(params, true);" +
      "window.onload = function () {applet.inject('applet_container');};" +
      "</script></p>";
    tinyMCEPopup.editor.execCommand("mceInsertContent", false, inserted);
    tinyMCEPopup.close();
  },
};

tinyMCEPopup.onInit.add(GeoDialog.init, GeoDialog);