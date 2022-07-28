// import clientPromise from './connectDB';

// export default async function handler(req, res) {
//   let client = await clientPromise;
//   let db = client.db('pixelpay');
//   // let resp = await db.collection('contactus').find().toArray();
//   let resp = await db.collection('contactus').insertOne(req.body);
//   res.status(200).json({ response: resp });
// }
