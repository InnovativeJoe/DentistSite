"use client";

import Script from "next/script";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

const phone = "919560932970";
const message = encodeURIComponent(
  "Hi The Tooth Clinic, I want to book a dental appointment and understand payment options."
);

export function RazorpayButton() {
  const startPayment = () => {
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    if (!key || !window.Razorpay) {
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener,noreferrer");
      return;
    }

    const checkout = new window.Razorpay({
      key,
      amount: 50000,
      currency: "INR",
      name: "The Tooth Clinic",
      description: "Appointment booking advance",
      prefill: {
        contact: "9560932970"
      },
      notes: {
        clinic: "Sarita Vihar, Delhi"
      },
      theme: {
        color: "#111111"
      }
    });

    checkout.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <Button onClick={startPayment} size="lg" className="w-full sm:w-auto">
        <CreditCard className="h-4 w-4" />
        Book with Razorpay
      </Button>
    </>
  );
}
