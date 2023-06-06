import { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse) {
  
  const html = `
    <html>
      <body style="display: flex; flex-direction: column; justify-content: center;">
        <dialog style="display: flex; flex-direction: column;">
          <h1>Welcome to the Climate Tech RSS Bridge!</h1>
          <p>Endpoints:</p>
          <ul>
            <li><a href="api/climateTechRSS">/climateTechRSS</a></li>
          </ul>
        </dialog>
      </body>
    </html>
  `;

  res.setHeader('content-type', 'text/html');
  res.status(200).send(html);
}
