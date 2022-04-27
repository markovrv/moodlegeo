(function () {
  // Load plugin specific language pack
  tinymce.PluginManager.requireLangPack("geogebra");
  tinymce.create("tinymce.plugins.geogebra", {
    /**
     * Initializes the plugin, this will be executed after the plugin has been created.
     * This call is done before the editor instance has finished it's initialization so use the onInit event
     * of the editor instance to intercept that event.
     *
     * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
     * @param {string} url Absolute URL to where the plugin is located.
     */
    init: function (ed, url) {
      // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
      ed.addCommand("mceGeogebra", function () {
        ed.windowManager.open(
          {
            file:
              ed.getParam("moodle_plugin_base") +
              "geogebra/tinymce/geoGebra.html",
            width: 920 + ed.getLang("geogebra.delta_width", 0),
            height: 420 + ed.getLang("geogebra.delta_height", 0),
            inline: 1,
          },
          {
            plugin_url: url,
          }
        );
        // var code =
        //   "'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'";
        // ed.execCommand(
        //   "mceInsertContent",
        //   false,
        //   "<p><div id='applet_container'></div>" +
        //     "<script type='text/javascript' src='https://www.geogebra.org/apps/deployggb.js'></script>" +
        //     "<script type='text/javascript'>var params={appName: 'graphing', width: 520, height: 320, showToolBar: false, showAlgebraInput: false, showMenuBar: false, ggbBase64:" +
        //     code +
        //     "};var applet = new GGBApplet(params, true);" +
        //     "window.onload = function () {applet.inject('applet_container');};" +
        //     "</script></p>"
        // );
      });

      // Register example button
      ed.addButton("geogebra", {
        title: "geoGebra Plugin",
        cmd: "mceGeogebra",
        image: url + "/img/geoGebra.gif",
        onAction: function (_) {
          выделить все
          удалить 
          editor.insertContent('ваш код геогебры');
        }
      });

      $(".mceClose").click(function () {
        let result = confirm(
          "Хотите вставить ваш график в текстовый редактор?"
        );
        if (result) {
          var code =
            "'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'";
          ed.execCommand(
            "mceInsertContent",
            false,
            "<p><div id='applet_container'></div>" +
              "<script type='text/javascript' src='https://www.geogebra.org/apps/deployggb.js'></script>" +
              "<script type='text/javascript'>var params={appName: 'graphing', width: 520, height: 320, showToolBar: false, showAlgebraInput: false, showMenuBar: false, ggbBase64:" +
              code +
              "};var applet = new GGBApplet(params, true);" +
              "window.onload = function () {applet.inject('applet_container');};" +
              "</script></p>"
          );
        }
      });
    },

    /**
     * Returns information about the plugin as a name/value array.
     * The current keys are longname, author, authorurl, infourl and version.
     *
     * @return {Object} Name/value array containing information about the plugin.
     */
    getInfo: function () {
      return {
        longname: "geoGebra plugin",
        author: "Alexei Melkov",
        authorurl: "",
        infourl: "",
        version: "1.051",
      };
    },
  });

  // Register plugin
  tinymce.PluginManager.add("geogebra", tinymce.plugins.geogebra);
})();
