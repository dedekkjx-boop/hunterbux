export default function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "";

  if (!userAgent.toLowerCase().includes("roblox")) {
    return res.status(403).send("Acesso permitido somente pelo Roblox.");
  }

  const script = `
loadstring(game:HttpGet("https://api.rubis.app/v2/scrap/9ewEiyOeegsfdA7E/raw"))()
`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(script);
}
