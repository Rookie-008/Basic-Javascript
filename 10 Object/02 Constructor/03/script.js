function Store(employee, consumer, menu, cash) {
	this.employee = employee;
	this.consumer = consumer;
	this.menu = menu;
	this.cash = cash;

	this.consumerIn = function(consumerName) {
		this.consumer.push(consumerName);
		return this.consumer;
	}

	this.consumerOut = function(consumerName, pay) {
		if ( this.consumer.length === 0 ) {
			alert('EMPTY..!!');
			return false;
		}

		for(var i = 0; i < this.consumer.length; i++) {
			if(this.consumer[i] == consumerName) {
				this.consumer[i] = undefined;
				this.cash += pay;

				return this.consumer;
			}
		}
	}
}

var employee1 = new Store('Rookie', ['consumer1', 'consumer2'], [], 0);
var employee2 = new Store('Rookie2', ['consumer3', 'consumer4'], [], 0);
