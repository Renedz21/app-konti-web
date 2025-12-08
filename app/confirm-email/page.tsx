"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ConfirmEmailContent() {
  const [message, setMessage] = useState("Procesando...");
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const params = useSearchParams();
  const token = params.get("token");

  useEffect(() => {
    const deleteAccount = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/delete-account`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          }
        );

        if (!res.ok) {
          setMessage("No se pudo eliminar la cuenta");
          setIsSuccess(false);
        } else {
          setMessage("Tu cuenta ha sido eliminada correctamente.");
          setIsSuccess(true);
        }
      } catch {
        setMessage("Error interno. Inténtalo más tarde.");
        setIsSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      deleteAccount();
    } else {
      setMessage("Token no válido");
      setIsLoading(false);
    }
  }, [token]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          {isLoading ? (
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          ) : isSuccess ? (
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          ) : (
            <XCircle className="w-12 h-12 text-destructive" />
          )}
        </div>
        <CardTitle className="text-2xl">Eliminación de cuenta</CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={`text-center text-sm leading-relaxed ${
            isSuccess ? "text-green-600 dark:text-green-400" : "text-foreground"
          }`}
        >
          {message}
        </p>
      </CardContent>
    </Card>
  );
}

function LoadingFallback() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>
        <CardTitle className="text-2xl">Eliminación de cuenta</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-sm leading-relaxed text-foreground">
          Procesando...
        </p>
      </CardContent>
    </Card>
  );
}

export default function ConfirmEmailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex items-center justify-center px-6 py-20 mt-16">
        <Suspense fallback={<LoadingFallback />}>
          <ConfirmEmailContent />
        </Suspense>
      </main>
    </div>
  );
}
