import NewsList from "@/Components/NewsList";
import { getAllNews } from "@/lib/news";
// import { DUMMY_NEWS } from "@/dummy-news";

async function page() {
  const news = await getAllNews();

  return (
    <main>
      <h1>News</h1>
      <NewsList news={news} />
    </main>
  );
}

export default page;
