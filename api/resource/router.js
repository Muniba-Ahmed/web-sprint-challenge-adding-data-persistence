// build your `/api/resources` router here
const express = require("express");

const Resource = require("./model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  Resource.getResources()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resource.insert(req.body)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

module.exports = router;
