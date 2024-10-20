const express = require("express");
const qrcode = require("qrcode");
const path = require("path");
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/generate", (req, res) => {
  const { text } = req.body;
  qrcode.toDataURL(text, (err, url) => {
    if (err) return res.status(500).json({ error: "Failed to gen qr code" });
    res.json({ qrCodeUrl: url });
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
