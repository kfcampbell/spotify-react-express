var express = require('express');
var router = express.Router();

/* GET example image */
router.get('/', function (req, res, next) {
  const image = 'https://3.bp.blogspot.com/-4EuWih02LBs/VfMHOS7fGBI/AAAAAAAAAAQ/wszG6GmVP_Q/s1600/roast-beef-achewood.jpg';
  const payload = {
    imageUrl: image
  };
  res.json(payload);
  /*res.set('Content-Type', 'application/json');
  return res.status(200).send({ imageUrl: image });*/
});

module.exports = router;
