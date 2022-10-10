import Product from "../../../models/Product";
import connectMongo from "../../../util/connectMongo";
export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  console.log("Connecting to Mongo");
  await connectMongo();
  console.log("Connected to Mongo");

  if (method === "GET") {
    try {
      const product = await Product.findById({ _id: id });
      console.log(product);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: "Error getting" });
    }
  }
  if (method === "PUT") {
    try {
      console.log(req.body);
      const body = req.body;
      const product = await Product.create(body);
      console.log(product);
      res.json({ product });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
    try {
      console.log(req.body);
      const body = req.body;
      const product = await Product.create(body);
      console.log(product);
      res.json({ product });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
