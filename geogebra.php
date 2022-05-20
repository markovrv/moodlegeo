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
    console.log(tinymce)
    // var str = window.tinyMCE.activeEditor.getContent();
    // var appName = 'graphig';
    // var begin = str.indexOf('ggbBase64')
  
    // if (begin != -1) {
    //   begin = str.indexOf('ggbBase64')+11;
    //   var end = str.indexOf("=='};")+2;
    //   appName = str.slice(str.indexOf('appName')+10,str.indexOf('width')-3);
    //   var code64 = str.slice(begin, end);
    //   var params = {
    //   appName: `'${appName}'`, 
    //   width: window.screen.width - 100,
    //   height: window.screen.height - 150, 
    //   showToolBar: true, 
    //   showAlgebraInput: true, 
    //   showMenuBar: true,
    //   ggbBase64: `'${code64}'`,
    //   };
    // }
    // else {
      var params = {
      // appName: `'${appName}'`, 
      appName: 'graphig', 
      width: window.screen.width - 100,
      height: window.screen.height - 150, 
      showToolBar: true, 
      showAlgebraInput: true, 
      showMenuBar: true,
      };
    // }
    var applet = new GGBApplet(params, true);
    window.onload = function () {applet.inject('ggb-element');};
  </script>
  
<div id="ggb-element">
</div>
<div>
  <input type="button" id="graphig" name="graphig" value="graphig" onclick="GeoDialog.reloadGraphig();"/>
  <input type="button" id="geometry" name="geometry" value="geometry" onclick="GeoDialog.reloadGeometry();"/>
  <input type="button" id="3d" name="3d" value="3d" onclick="GeoDialog.reload3d();"/>
  <input type="button" id="insert" name="insert" value="Вставить" onclick="GeoDialog.insert();"/>
  <input type="button" id="cancel" name="cancel" value="Отмена" onclick="tinyMCEPopup.close();"/> 
</div>   
<?php

echo $OUTPUT->footer();
