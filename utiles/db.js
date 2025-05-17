const mongoose = require('mongoose');

module.exports.dbConnect = async()=>{
    try {
        if(process.env.mode === 'pro'){
            await mongoose.connect(process.env.DB_PRO_URL, {
                useNewUrlParser: true
            })
          console.log("Production Database connected..")
        }else{
            await mongoose.connect(process.env.DB_LOCAL_URL, {
                useNewUrlParser: true
            })
          console.log("Local Development Database connected..")
        }
      
    } catch (error) {
        console.log(error.message)
    }
}