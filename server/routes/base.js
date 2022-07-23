'use strict';

const express = require('express');
const router = express.Router();
const phoneList = require('../data/phones.json');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

// GET - Display list of all phones
router.get('/phones', (req, res, next) => {
  res.json({ phones: phoneList });
});

// GET - Retrieve details of a single phone
router.get('/phones/:id', (req, res, next) => {
  const { id } = req.params;
  const idToNumber = Number(id);
  const singlePhone = phoneList.filter((phone) => phone.id === idToNumber);
  res.json({ phone: singlePhone });
});

module.exports = router;
