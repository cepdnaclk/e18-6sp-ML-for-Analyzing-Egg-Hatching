const mongoose = require('mongoose');

const PaultryDataSchema = new mongoose.Schema({
    
    prediction:{
        type: Number                                       
    },
    total_eggs:{
        type: Number
    },
    sex_ratio:{
        type: Number
    },
    age:{
        type: Number 
    },
    feed_female:{
        type: Number
        
    },
    feed_male:{
        type: Number
        
    },
    mortality_male:{
        type: Number
        
    },mortality_female:{
        type: Number
        
    },
    actual:{
        type: Number
    },
    egg_weight:{
        type: Number
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Data",PaultryDataSchema)