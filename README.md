# eventsManager
A little module to add events to your class

```js
const events = require('small-events-manager');
```

declare the `on` method of the event class as the on method of your class :
```js
self.on = events.on;
```

use the on method to add function on events :
```js
yourClass.on("yourEvent", (data)=>{
	//your code here
});
```

and into your class, use the run method to run an event, with your data :
```js
events.run("yourEvent", data);
```
