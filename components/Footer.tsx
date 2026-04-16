import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto pt-20 pb-12 px-6 md:px-12 flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
      <p>© 2026 ATTOM Agency. All rights reserved.</p>

      <div className="flex flex-wrap items-center gap-6">
        <Link
          href="/privacy-policy"
          className="hover:text-black transition underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
        <Link
          href="/cookie-policy"
          className="hover:text-black transition underline-offset-4 hover:underline"
        >
          Cookie Policy
        </Link>
        <Link
          href="/terms-and-conditions"
          className="hover:text-black transition underline-offset-4 hover:underline"
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}