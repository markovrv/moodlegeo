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
      });

      // Register example button
      ed.addButton("geogebra", {
        title: "geoGebra Plugin",
        cmd: "mceGeogebra",
        image: url + "/img/geoGebra.gif",
        onAction: function (_) {
          // выделить все
          // удалить
          editor.insertContent("ваш код геогебры");
        },
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
        version: "1.052",
      };
    },
  });

  // Register plugin
  tinymce.PluginManager.add("geogebra", tinymce.plugins.geogebra);
})();
