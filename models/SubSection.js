var keystone = require('keystone');
var Types = keystone.Field.Types;

var SubSection = new keystone.List('SubSection', {
	map: {name: 'title'},
	nocreate: true,
	nodelete: true
});

SubSection.add({
	title: {type: String, required: true, height: 50},
	content: { type: Types.Html, wysiwyg: true, height: 150 },
	section: {type: Types.Relationship, initial: true, ref: 'Section', index: true},
	order: {type: Types.Number, noedit: true},
	editedDate: {type: Types.Date, default: Date.now}
});

SubSection.defaultSort = 'section, order';
SubSection.defaultColumns = 'title|25%, section|30%, order|10%, editedDate|15%';
SubSection.register();
