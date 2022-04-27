function addMegaMenuAttributes(settings, name) {
    if (typeof settings.attributes !== 'undefined') {
        if (name == 'core/navigation-link') {
            settings.attributes = Object.assign(settings.attributes, {
                displayMegaMenu: {
                    type: 'boolean',
                },
                megaMenuId: {
                    type: 'string',
                }
            });
        }
    }
    return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'beflex/mega-menu-custom-attribute',
    addMegaMenuAttributes
);



const megaMenuAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { Fragment, useState } = wp.element;
        const { ToggleControl } = wp.components;
        const { TextControl } = wp.components;
        const { InspectorAdvancedControls } = wp.blockEditor;
        const { attributes, setAttributes, isSelected } = props;

        return (
            <Fragment>
                <BlockEdit {...props} />
                {isSelected && (props.name == 'core/navigation-link') &&
                <InspectorAdvancedControls>

                    <ToggleControl
                        label={wp.i18n.__('Display Mega Menu', 'beflex-child')}
                        help={
                            attributes.displayMegaMenu
                                ? 'Display Mega Menu'
                                : 'Display standard menu'
                        }
                        checked={!!attributes.displayMegaMenu}
                        onChange={(newval) => setAttributes({ displayMegaMenu: !attributes.displayMegaMenu })}
                    />

                    <TextControl
                        label={wp.i18n.__('Mega Menu ID', 'beflex-child')}
                        value={ attributes.megaMenuId }
                        onChange={ ( value ) => setAttributes( { megaMenuId: value } ) }
                    />

                </InspectorAdvancedControls>
                }
            </Fragment>
        );
    };
}, 'megaMenuAdvancedControls');

wp.hooks.addFilter(
    'editor.BlockEdit',
    'beflex/mega-menu-advanced-control',
    megaMenuAdvancedControls
);



function headingApplyExtraClass(extraProps, blockType, attributes) {
    const { displayMegaMenu, megaMenuId } = attributes;

    let className = (extraProps.className != undefined) ? extraProps.className : '';
    console.log(displayMegaMenu);
    console.log(megaMenuId);

    // if (typeof animationIn !== 'undefined' && animationIn) {
    //     className += ' bf-block-animatein';
    //
    //     if ( animationInType ) {
    //         className += ' bf-block-animatein--type-' + animationInType;
    //     }
    // }

    extraProps.className = className;

    return extraProps;
}

wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'beflex/azezeaeazezaezae-apply-class',
    headingApplyExtraClass
);