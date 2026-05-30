/* Cookie consent banner */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-slate-900 text-white px-4 py-4 sm:py-5 shadow-2xl border-t-4 border-primary">
      <div className="container max-w-screen-xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex-1 text-xs sm:text-sm leading-relaxed">
          <p className="font-semibold text-primary mb-1">🍪 We use cookies</p>
          <p>
            This website uses essential cookies to function correctly and
            analytical cookies to help us understand how visitors use our site.
            By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies. For more
            details, please see our{" "}
            <Link href="/privacy" className="text-primary underline hover:text-yellow-300">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 border border-gray-500 text-gray-400 text-xs sm:text-sm hover:border-white hover:text-white transition-colors rounded"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-yellow-600 transition-colors rounded"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
