
export default async function handler(req,res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = await req.json();

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
        Authorization: `Bearer re_H4a2FYsH_BtDzUpJuYxJWSw1BYvtX5obD`,
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
      return res.json({ error }, { status: response.status });
    }

    return res.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log('error' , error)
    return res.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}