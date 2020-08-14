// module.exports = () => {
//     return (req, res, next){
//         Post = req.params.id;
      
//         Posts.getById(Post)
//           .then((response) => {
//             if (!response) {
//               res.status(400).json({ error: "Invalid Post ID" });
//             } else {
//               next();
//             }
//           })
//           .catch((error) => {
//             res.status(400).json({ error: "Invalid Post ID" });
//           });
//       }
//   }