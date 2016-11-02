var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var SubSection = keystone.list('SubSection');

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
				if (err) {
					next(err);
				}
				
				async.mapSeries(results, function(result, cb) {
					SubSection.model
								.find()
								.where('section', result._id)
								.sort('order')
								.exec(function(err, subsections) {
									if (err) {
										cb(err);
									}
									cb(null, {
										section: result, 
										subsections
									});
								});
				}, function(err, results){
					locals.sections = results;
					next(err);
				});
			});
	});

	// Render the view
	view.render('index');
};
