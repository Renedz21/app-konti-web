import { Resend } from "resend";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { getPublicUrl } from "@/lib/public-url";
import DeleteAccountEmail from "@/components/shared/emails/delete-account/email";

const resend = new Resend(process.env.RESEND_API_KEY);
const secret = new TextEncoder().encode(process.env.DELETE_SECRET);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "El email es requerido" },
        { status: 400 }
      );
    }

    if (!process.env.DELETE_SECRET) {
      return NextResponse.json(
        { error: "DELETE_SECRET not configured" },
        { status: 500 }
      );
    }

    const token = await new SignJWT({ email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("15m")
      .sign(secret);

    const confirmUrl = `${getPublicUrl()}/confirm-email?token=${encodeURIComponent(
      token
    )}`;

    const { data, error } = await resend.emails.send({
      from: "Konti <soporte.konti@konti.dev>",
      to: email,
      subject: "Confirma la eliminación de tu cuenta",
      react: DeleteAccountEmail({ url: confirmUrl }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Internal error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
