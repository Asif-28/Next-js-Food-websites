import Product from "../../../models/Product";
import connectMongo from "../../../util/connectMOngo";
export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
  }
  if (method === "POST") {
    console.log("Connecting to Mongo");
    try {
      await connectMongo();
      console.log("Connected to Mongo");
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
