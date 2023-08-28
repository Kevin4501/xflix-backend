const express = require("express");
const router = express.Router();
const videoValidation = require("../validations/video.validation");
const validate = require("../middlewares/validate");
const videoController = require("../controllers/video.controller");

router.get(
  "/",
  validate(videoValidation.searchVideos),
  videoController.getVideos
);
router.get(
  "/:videoId",
  validate(videoValidation.getVideo),
  videoController.getVideoById
);
router.post(
  "/",
  validate(videoValidation.createVideo),
  videoController.postVideo
);
router.patch(
  "/:videoId/votes",
  validate(videoValidation.changeVotes),
  videoController.changeVotes
);
router.patch(
  "/:videoId/views",
  validate(videoValidation.getVideo),
  videoController.changeViews
);
module.exports = router;