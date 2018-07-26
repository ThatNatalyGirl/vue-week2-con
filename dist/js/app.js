'use strict';

var app = new Vue({
	el: "#app",
	data: {
		newName: '',
		newEmail: '',
		people: []
	},

	created: function created() {
		setInterval(this.updateTimeSinceCheckins, 5 * 1000);
	},
	//new vue - create 

	methods: {
		updateTimeSinceCheckins: function updateTimeSinceCheckins() {
			this.people.forEach(function (person) {
				person.timeSinceCheckin = Math.floor((new Date().getTime() - person.timestamp) / 1000 / 60);
			});
		},

		addPerson: function addPerson() {
			console.log("add me!");

			var newPerson = {
				image: 'https://www.gravatar.com/avatar/' + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				// checkin: moment(this.timestamp).format("MMM Do hh:mm:ss a"),
				timestamp: new Date().getTime(),
				timeSinceCheckin: 0
				//https://momentjs.com/

				//clear the data from the input field
			};this.newName = '';
			this.newEmail = '';
			//adds the new person typed in to the people array
			this.people.push(newPerson);

			if (this.people.length > 8) {
				this.people.shift();
			}

			// setInterval(function(){
			// 	newPerson.timeSinceCheckin++
			// }, 60*1000)
			//easy time since update 


			//after submitting, focus on the first
			this.$refs.name.focus();
		}

		// timeSinceLogin: function(){

		// }
		// function timeSince(date) {
		// 	var seconds = Math.floor(((new Date().getTime()/1000) - date)),
		// 	interval = Math.floor(seconds / 31536000);

		// 	if (interval > 1) return interval + "y";

		// 	interval = Math.floor(seconds / 2592000);
		// 	if (interval > 1) return interval + "m";

		// 	interval = Math.floor(seconds / 86400);
		// 	if (interval >= 1) return interval + "d";

		// 	interval = Math.floor(seconds / 3600);
		// 	if (interval >= 1) return interval + "h";

		// 	interval = Math.floor(seconds / 60);
		// 	if (interval > 1) return interval + " m";

		// 	return Math.floor(seconds) + "s";
		// }
	}
});

//for homeworks
// make it so it just shows the last nine images 
//format the time
//bonus make it show the time since they checked in. So current time minus the time it happened and then recalculating every minute
//# sourceMappingURL=app.js.map
