"use client";

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { useToast } from "@/components/ui/use-toast";

function FormContainer({ action, children }) {
  const [state, formAction] = useFormState(action, { message: "" });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state, toast]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
