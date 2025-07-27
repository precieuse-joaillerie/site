import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest) {
  try {
    const { firstName, lastName, birthDate, country, email, occasion, description } = await req.json();
    const html = `
      <div style="font-family: 'Helvetica, Arial, sans-serif'; color: #2a2765; padding: 20px;">
        <h1 style="font-size: 24px; margin-bottom: 20px;">Nouveau contact Pour le sur-mesure</h1>
        ${firstName ? `<p><strong>Prénom:</strong> ${firstName}</p>` : ""}
        ${lastName ? `<p><strong>Nom:</strong> ${lastName}</p>` : ""}
        ${birthDate ? `<p><strong>Date de naissance:</strong> ${birthDate}</p>` : ""}
        ${country ? `<p><strong>Pays:</strong> ${country}</p>` : ""}
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
        ${occasion ? `<p><strong>Occasion:</strong> ${occasion}</p>` : ""}
        ${description ? `<p><strong>Description:</strong> ${description}</p>` : ""}
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
        subject: "Nouveau contact pour le sur-mesure",
        html,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error }, { status: response.status });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}