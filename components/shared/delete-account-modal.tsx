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

export default function DeleteAccountModal() {
  const [email, setEmail] = useState("");

  const handleDeleteAccount = async () => {
    if (!email) {
      return;
    }
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
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
            disabled={!email}
          >
            Eliminar cuenta
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
