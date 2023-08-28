const mongoose = require("mongoose")
const { genres, contentRating } = require("../utils/values");
const videoSchema = mongoose.Schema({
    videoLink : {type : String , required: true , trim : true , unique : true },
    title :{type : String , required : true},
    genre : {type : String , required : true,
    validate(value) {
        if(!genres.includes(value)) throw newError ("Invalid Genre")
    }},
    contentRating : {type : String , required : true, trim : true ,
        validate(value) {
            if(!contentRating.includes(value)) throw newError ("Invalid Content Rating")
        }} ,
    releaseDate : {
        type: String, required: true, trim: true
    } ,
    previewImage: {
        type: String,
        trim: true,
        default: "https://i.ibb.co/nbYsmJB/Xflix.jpg",
      },
      votes: {
        upVotes: { type: Number, default: 0 },
        downVotes: { type: Number, default: 0 },
      },
      viewCount: { type: Number, default: 0 },
    
})

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;