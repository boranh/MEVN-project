const mongoose = require("mongoose");


mongoose.connect("mongodb://example:<passowrd>andcopythelinkfromyourmongodbdatabase", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false
}).then(()=> {
    console.log("connection is successfull");
}).catch((e) => {
    console.log("No Connection")
})

