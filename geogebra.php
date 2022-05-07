<?php

define('NO_MOODLE_COOKIES', true);

require('../../../../../config.php');

$PAGE->set_context(context_system::instance());
$PAGE->set_url('/lib/editor/tinymce/plugins/geogebra/geogebra.php');
$PAGE->set_title(get_string('title', 'tinymce_geogebra'));
$PAGE->set_pagelayout('embedded');

$editor = get_texteditor('tinymce');
$plugin = $editor->get_plugin('geogebra');

$PAGE->requires->js(new moodle_url($editor->get_tinymce_base_url() . '/tiny_mce_popup.js'));
$PAGE->requires->js(new moodle_url($plugin->get_tinymce_file_url('js/dialog.js')));

echo $OUTPUT->header();

?>
  <script src="https://www.geogebra.org/apps/deployggb.js"></script>
  <script>
    var params = {
      appName: "graphing", width: window.screen.width - 100,
      height: window.screen.height - 150, showToolBar:
        true, showAlgebraInput: true, showMenuBar: true,
    };
    var applet = new GGBApplet(params, true);
    window.onload = function () {applet.inject('ggb-element');};
  </script>
  
<div id="ggb-element">
</div>
<input type="button" id="insert" name="insert" value="{#insert}" onclick="GeoDialog.insert();"/>
<input type="button" id="cancel" name="cancel" value="{#cancel}" onclick="tinyMCEPopup.close();"/>    
<?php

echo $OUTPUT->footer();
