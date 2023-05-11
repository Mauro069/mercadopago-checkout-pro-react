import { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: process.env.NEXT_ACCESS_TOKEN!,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const topic = query.topic || query.type;

  console.log({ query, topic });
  try {
    if (topic === "payment") {
      const paymentId = query.id || query["data.id"];
      let payment = await mercadopago.payment.findById(Number(paymentId));
      let paymentStatus = payment.body.status;

      console.log([payment, paymentStatus]);
    }
  } catch (error) {
    res.send(error);
  }
};

export default handler;
