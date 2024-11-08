import NewsList from "@/Components/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";

function page() {
  return (
    <main>
      <h1>News</h1>
      <NewsList news={DUMMY_NEWS} />
    </main>
  );
}

export default page;
