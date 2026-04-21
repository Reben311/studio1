export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    return res.status(200).json({
      success: true,
      score: 82,
      analysis:
        "The photo has good front-facing composition with balanced lighting. Minor enhancements were applied to even out skin tones and sharpen facial features for a polished, document-ready result.",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Server error" });
  }
}
