const express = require("express");

const router = express.Router();

// router.get("/humans", (req, res, next) => {
//   // res.end("Finish ");

//   res.json({ posts: [{ a: 1 }, { b: 2 }] });
// });

router
  .route("/humans")
  .get((req, res, next) => {
    // res.end("Finish ");
    return next({ message: "Error" });
    res.json({ posts: [{ a: 1 }, { b: 2 }] });
  })
  .post((req, res, next) => {
    const { name, age } = req.body;

    console.log(name, age);

    res.status(201).json({ post: "Hello" });
  });

router.route("/humans/:humanId/:id").delete((req, res, next) => {
  const { humanId, id } = req.params;
  console.log(humanId, id);

  res.end();
});

module.exports = {
  router,
};
