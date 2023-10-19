import IssueList from "@/components/IssueList";

export default async function Home({ searchParams }: { searchParams: any }) {
  return (
    <main className="container sm:p-8 min-h-screen sm:mx-auto py-8">
      <IssueList searchParams={searchParams} />
    </main>
  );
}
