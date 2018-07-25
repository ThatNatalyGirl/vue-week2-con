var app = new Vue({
	el: "#app",
	data: {
		newName: '',
		newEmail: '',
		people:	[],
	},

	methods:{
		addPerson: function () {
			console.log("add me!")
			let newPerson = {
				image: 'https://www.gravatar.com/avatar/' + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				timestamp: new Date().getTime(),
			}
			//clear the data from the input field
			this.newName = ''
			this.newEmail = ''
			//adds the new person typed in to the people array
			this.people.push(newPerson)
		}
	}
})

//for homeworks
// make it so it just shows the last nine images 
//format the time
//bonus make it show the time sense they checked in. So current time minus the time it happened and then recalculating every minute