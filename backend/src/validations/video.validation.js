const Joi = require("joi");
const customValidator = require("./custom.validation");
const Values = require("../utils/values");
const Video = require("../models/video.models");
const searchVideos = {
  query: Joi.object().keys({
    title: Joi.string(),
    genres: Joi.string().custom(customValidator.genres),
    contentRating: Joi.string().custom(customValidator.contentRating),
    sortBy: Joi.string().valid(...Values.sortBy),
  }),
};
const getVideo = {
  params: Joi.object().keys({
    videoId: Joi.string().custom(customValidator.objectId),
  }),
};
const createVideo = async (body) => {
  const video = await Video.create({ ...body });
  if (!video)
    throw new ApiError(httpStatus.BAD_REQUEST, "Unable to create Video");

  return video;
};
const changeVotes = {
  params: Joi.object().keys({
    videoId: Joi.string().custom(customValidator.objectId),
  }),
  body: Joi.object().keys({
    vote: Joi.string().required().valid("upVote", "downVote"),
    change: Joi.string().required().valid("increase", "decrease"),
  }),
};
module.exports = {searchVideos , getVideo , createVideo , changeVotes} ;