const express = require('express');
const router = express.Router();

const buyoutsRouter = require('./buyouts');
const evictionsRouter = require('./evictions');
const uploadsRouter = require('./uploads');
const usersRouter = require('./users');

router.use('/buyouts', buyoutsRouter);
router.use('/evictions', evictionsRouter);
router.use('/uploads', uploadsRouter);
router.use('/users', usersRouter);

module.exports = router;
