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
	order: {type: Types.Number},
	editedDate: {type: Types.Date, default: Date.now}
});

Section.defaultSort = '+order';
Section.defaultColumns = 'title|20%, content|40%, editedDate|20%, order|10%';
Section.register();
