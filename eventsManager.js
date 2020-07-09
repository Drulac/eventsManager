const events = {}
const c = {}

c.on = (event, func) => {
	if (typeof events[event] != 'array') {
		events[event] = []
	}
	events[event].push(func)

	return c
}

c.run = (event, data) => {
	if (
		typeof events[event] == 'array' ||
		typeof events[event] == 'object'
	) {
		events[event].forEach((e) =>
			setTimeout(() => {
				//console.log(event, e, data)
				e(data)
			}, 1)
		)
	}

	return c
}
module.exports = c
