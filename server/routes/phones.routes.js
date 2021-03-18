const express = require("express")
const router = express.Router()

const Phone = require("../models/phone.model")
router.get("/all", (_req, res) => {
  Phone.find()
    .select("phone_id name manufacturer imageFileName")
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "No se han podido recuperar los teléfonos", err }))
})
router.get("/:phone_id", (req, res) => {
  Phone.findOne({ phone_id: req.params.phone_id })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ code: 500, message: "No se han podido recuperar el teléfono", err }))
})
module.exports = router
