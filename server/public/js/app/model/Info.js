var Info = Backbone.Model.extend({
	defaults: {
		'id': 0,
		'Name': 'N/A',
		'Continent': 'N/A',
		'Capital': 'N/A',
		'Population': 0
	},
	url: '/country'
});