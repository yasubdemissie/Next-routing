import NewsList from "@/Components/NewsList";
import { getLatestNews } from "@/lib/news";

function latest() {
  const news = getLatestNews();

  return (
    <main>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </main>
  );
}

export default latest;
