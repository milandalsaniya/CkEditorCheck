//alert("Hii THre");

CKEDITOR.editorConfig = function( config ) {

    config.language = 'fr';
    config.uiColor = '#AADC6E';

    config.templates_files = [ '/javascript/ckeditor/templates.js' ];

    config.toolbar_custom = [
        ['Templates', 'Styles','Format','Font','FontSize','TextColor','BGColor','Maximize','Image'],
        ['Source'],
        ['Bold','Italic','Underline','Strike','-','Subscript','Superscript','-','SpellChecker', 'Scayt'],
        ['Table','HorizontalRule'],
        ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','Link','Unlink','Anchor','Smiley','SpecialChar'],
        ['MediaEmbed']
    ]
};