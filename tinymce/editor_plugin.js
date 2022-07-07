(function () {
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
      ed.addCommand("mceGeogebra", function () {
        ed.windowManager.open(
          {
            file: ed.getParam("moodle_plugin_base") + "geogebra/geogebra.php",
            width:
              window.outerWidth -
              100 +
              parseInt(ed.getLang("geogebra.delta_width", 0)),
            height:
              window.outerHeight -
              250 +
              parseInt(ed.getLang("geogebra.delta_height", 0)),
            inline: 1,
          },
          {
            plugin_url: url,
          }
        );
      });

      ed.addButton("geogebra", {
        title: "GeoGebra Plugin",
        cmd: "mceGeogebra",
        image: url + "/img/geoGebra.gif",
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
        longname: "GeoGebra plugin",
        author: "Alexei Melkov",
        authorurl: "alekseymelkov@gmail.com",
        infourl: "",
        version: "1.07",
      };
    },
  });

  tinymce.PluginManager.add("geogebra", tinymce.plugins.geogebra);
})();
