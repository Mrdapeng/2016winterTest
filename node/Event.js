/**
 * Created by Administrator on 2017/2/13.
 */
var Event=require("events").EventEmitter;
var event=new Event();
event.on('some_event',function () {
   console.log("some event occured");
});
setTimeout(function () {
   event.emit('some_event');
},10000);