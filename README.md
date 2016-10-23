# eventsManager
A little JS class to add events to your class

in your class, declare a new `\_eventsManager` class :
```js
let events = new _eventsManager();
```
declare the on method of the event class as the on method of your class :
```js
self.on = events.on;
```

use the on method to add function on events :
```js
yourClass.on("yourEvent", function(yourArgs){
	//your code here
});
```

and into your class, use the run method to run an event, with your args in an array :
```js
events.run("yourEvent", yourArgs);
```
