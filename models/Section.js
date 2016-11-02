var keystone = require('keystone');
var Types = keystone.Field.Types;

var Section = new keystone.List('Section', {
	map: {name: 'title'},
	nocreate: true,
	nodelete: true
});

Section.add({
	title: {type: String, required: true},
	content: { type: Types.Html, wysiwyg: true, height: 150 },
	order: {type: Types.Number, noedit: true},
	editedDate: {type: Types.Date, default: Date.now}
});

Section.relationship({path: 'subsections', ref: 'SubSection', refPath: 'section'});

Section.defaultSort = '+order';
Section.defaultColumns = 'title|45%, order|10%, editedDate|20%';
Section.register();
