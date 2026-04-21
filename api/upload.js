export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    return res.status(200).json({
      success: true,
      file_url:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      message: "Mock upload complete",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Server error" });
  }
}
