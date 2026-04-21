export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      return res.status(200).json({
        success: true,
        id: `mock-session-${Date.now()}`,
        message: "Mock photo session saved",
      });
    }

    if (req.method === "GET") {
      return res.status(200).json({
        success: true,
        sessions: [],
      });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Server error" });
  }
}
