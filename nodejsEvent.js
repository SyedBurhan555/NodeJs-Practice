const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on('WaterFull',(firstname,lastname)=>{
    console.log('waterfull event is trigger');
    console.log(firstname,lastname)
    setTimeout(()=>{
        console.log('setimeout function is call')
    },1000)
})

myEmitter.on('Name',(name,lname)=>{
    const val = name + lname
    setImmediate(()=>{
        console.log('this happens asynchronously')
    })
    console.log(val)
})
myEmitter.once('hello',()=>{
    console.log('this event is call once')
})
// myEmitter.on('error',()=>{
//     console.error('there was an error')
// }) this method do nothing use other way

// myEmitter.on(EventEmitter.errorMonitor,(err)=>{
//     MyMonitoringTool.log(err)
// })
myEmitter.emit('WaterFull','burhan','ali')
myEmitter.emit('Name','Syed-burhan-ali-shah','uddin')
// myEmitter.emit('error')
// console.log(myEmitter)
myEmitter.emit('hello')
console.log("hi dear")