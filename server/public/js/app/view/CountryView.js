var CountryView = Backbone.View.extend({
	tagName: 'li',

	template: _.template(tpl['list']),

	events: {
		'click': 'show'
	},

	initialize: function () {
		this.descView = new DescriptionView({
			model: this.model
		});
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	},

	show: function () {
		this.$el.addClass('myClass');
		
		$('#country-desc').html(this.descView.render().el)
	}
})