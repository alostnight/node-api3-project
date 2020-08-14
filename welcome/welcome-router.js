const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.json({
		message: `Welcome to ${process.env.API}, ${process.env.NEW}`,
	})
})

module.exports = router