let _eventsManager = function()
{
	let self = this;
	let events = {};

	self.on = function(event, func)
	{
		if(typeof events[event] != "array")
		{
			events[event] = [];
		}
		events[event].push(func);

		return self;
	};

	self.run = function(event, data)
	{
		if(typeof events[event] == "array" || typeof events[event] == "object")
		{
			for(let i = 0, ni = events[event].length; i < ni; i++)
			{
				setTimeout(function(){
					events[event][i].apply(null, data);
				}, 1);
			}
		}

		return self;
	};
};
