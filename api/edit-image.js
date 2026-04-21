export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { imageUrl, maskUrl, prompt } = req.body;

    return res.status(200).json({
      success: true,
      imageUrl,
      maskUrl,
      prompt,
      message: "API connected successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Server error",
    });
  }
}
