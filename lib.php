<?php


defined('MOODLE_INTERNAL') || die();


class tinymce_geogebra extends editor_tinymce_plugin
{
    
    protected $buttons = array('geogebra');

    protected function update_init_params(array &$params, context $context, array $options = null)
    {
        // Add button to the editor.
        $this->add_button_after($params, $this->count_button_rows($params), 'geogebra');

        // Add JS file, which uses default name.
        $this->add_js_plugin($params);
    }
}
