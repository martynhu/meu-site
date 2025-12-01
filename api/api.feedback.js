let feedbacks = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    feedbacks.push(req.body);
    return res.status(200).json({ ok: true });
  }

  if (req.method === "GET") {
    return res.status(200).json(feedbacks);
  }
}
