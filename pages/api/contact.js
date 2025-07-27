
export default async function handler(req,res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = await req.body;

    const html = `
      <div style="font-family: 'Helvetica, Arial, sans-serif'; color: #2a2765; padding: 20px;">
        <h1 style="font-size: 24px; margin-bottom: 20px;">Nouveau contact</h1>
        ${name ? `<p><strong>Nom:</strong> ${name}</p>` : ""}
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
        ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ""}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer re_hPJ824fs_Bf4LexrF3A3WU1GY2dWnvPbS`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@precieuse-joaillerie.com",
        to: "contact@precieuse-joaillerie.com",
        subject: "Nouveau contact",
        html,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log('error' , error)
    return res.status(500).json({ error: "Failed to send email" });
  }
}