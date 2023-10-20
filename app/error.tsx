"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex items-center justify-center text-center flex-col gap-12 text-gh-primary">
      <h2>Bir şeyler ters gitti!</h2>
      <button
        className="bg-green-500 text-white hover:bg-gh-secondary-hover hover:text-gray-300 px-4 py-2 rounded-md"
        onClick={() => reset()}
      >
        Lütfen tekrar deneyin
      </button>
    </div>
  );
}
