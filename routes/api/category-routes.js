const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//TODO: 
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

//TODO: 
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

//TODO: 
router.post('/', (req, res) => {
  // create a new category
});

//TODO: 
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

//TODO: 
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
