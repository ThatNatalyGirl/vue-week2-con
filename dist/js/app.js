'use strict';

var app = new Vue({
	el: "#app",
	data: {
		newName: '',
		newEmail: '',
		people: []
	},

	methods: {
		addPerson: function addPerson() {
			console.log("add me!");
			var newPerson = {
				image: 'https://www.gravatar.com/avatar/' + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				// timestamp: new Date().getTime(),
				timestamp: new Date().getTime(),
				checkin: moment(this.timestamp).format("MMM Do hh:mm:ss a"),
				lapsedtime: this.sinceTime()
				//clear the data from the input field
			};this.newName = '';
			this.newEmail = '';
			//adds the new person typed in to the people array
			this.people.push(newPerson);

			if (this.people.length > 2) {
				this.people.splice(this.index, 1);
			}
			this.setFocus();
		},

		setFocus: function setFocus() {
			this.$refs.name.focus();
		},
		sinceTime: function sinceTime() {
			var _this = this;

			this.interval = setInterval(function () {
				var timestamp = _this.timestamp;
				console.log('hello');
			}, 1000);
		}
	}
});

//for homeworks
// make it so it just shows the last nine images 
//format the time
//bonus make it show the time sense they checked in. So current time minus the time it happened and then recalculating every minute
//# sourceMappingURL=app.js.map
