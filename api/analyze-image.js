export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    return res.status(200).json({
      success: true,
      score: 88,
      analysis: "Good lighting, centered face, suitable for formal use.",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Server error" });
  }
}
