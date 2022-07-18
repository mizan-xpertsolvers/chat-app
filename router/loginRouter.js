const express = require("express");
const router = express.Router();

const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { getLogin } = require("../controller/loginController");

router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
