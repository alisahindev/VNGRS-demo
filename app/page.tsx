import IssueList from "@/components/IssueList";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  console.log(searchParams);
  return (
    <main className="container sm:p-8 min-h-screen sm:mx-auto py-8">
      <IssueList searchParams={searchParams} />
    </main>
  );
}
