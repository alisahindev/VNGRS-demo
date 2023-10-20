import Link from "next/link";
import Typography from "@/components/Typography";

export default async function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center text-center flex-col gap-12">
      <Typography variant="h2">Bir şeyler ters gitti !</Typography>
      <Typography variant="p">
        Lütfen daha sonra tekrar deneyin yada&nbsp;
        <Link className="text-blue-500 hover:underline" href={`/`}>
          anasayfaya dönün
        </Link>
      </Typography>
      <ul
        role="list"
        aria-label="Check your token"
        className="divide-y divide-issue-list-border sm:border border-issue-list-border rounded-b-md"
      >
        <li className="py-4 px-6 text-sm text-gray-500 list-none ">
          Lütfen token bilgilerinizi kontrol edin.{" "}
        </li>
      </ul>
    </div>
  );
}
