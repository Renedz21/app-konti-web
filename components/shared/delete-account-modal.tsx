"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function DeleteAccountModal() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteAccount = async () => {
    if (!email) {
      toast.error("Por favor, ingresa tu correo electrónico");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      await response.json();
      toast.success("Se ha enviado un correo de eliminación a tu cuenta");
    } catch {
      toast.error("Error al enviar el correo de eliminación");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 text-muted-foreground">
          Eliminar cuenta
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar cuenta</DialogTitle>
          <DialogDescription>
            ¿Estás seguro de querer eliminar tu cuenta? Esta acción no se puede
            deshacer. Esta acción eliminará tu cuenta y removerá tus datos de
            nuestros servidores.
          </DialogDescription>
        </DialogHeader>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            className="w-full border border-border rounded-md py-2 px-4"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={handleDeleteAccount}
            disabled={!email || isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Eliminar cuenta"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
