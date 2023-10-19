import Link from "next/link";
import { headers } from "next/headers";
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
    </div>
  );
}
