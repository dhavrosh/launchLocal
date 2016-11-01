var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.sections = [];

	// get all sections
	view.on('init', function (next) {
		keystone.list('Section').model
			.find({})
			.sort('order')
			.exec(function (err, results) {
				locals.sections = results;
				next(err);
			});
	});

	// Render the view
	view.render('index');
};
