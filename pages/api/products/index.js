import Product from "../../../models/Product";
import connectMongo from "../../../util/connectMongo";
export default async function handler(req, res) {
  const { method } = req;
  console.log("Connecting to Mongo");
  await connectMongo();
  console.log("Connected to Mongo");
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
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
