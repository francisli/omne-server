'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models');
const interceptors = require('../interceptors');
const helpers = require('../helpers');

router.get('/', interceptors.requireAdmin, function(req, res, next) {
  const page = req.query.page || 1;
  models.Eviction.paginate({
    page: req.query.page || 1,
    order: [['file_date', 'DESC'], ['eviction_id', 'DESC']]
  }).then(function({docs, pages, total}) {
    helpers.setPaginationHeaders(req, res, page, pages, total);
    res.json(docs.map(d => d.toJSON()));
  });
});

module.exports = router;
