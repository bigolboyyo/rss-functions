import { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";

export default function (req: VercelRequest, res: VercelResponse) {
  const readmePath = path.join(__dirname, "..", "README.md");
  const readmeContent = fs.readFileSync(readmePath, "utf8");

  const html = `
    <html>
      <body>
        <div style="display: flex; flex-direction: column; justify-content: center; max-width: 100vw;">
          <h1>Welcome to the Climate Tech RSS Bridge!</h1>
          <p>Endpoints:</p>
          <ul>
            <li><a href="/api/climateTechRSS">/climateTechRSS</a></li>
          </ul>
          <div>
            <h2>README.md:</h2>
            <pre style="text-wrap: wrap !important;">${readmeContent}</pre>
          </div>
        </div>
      </body>
    </html>
  `;

  res.setHeader("content-type", "text/html");
  res.status(200).send(html);
}
