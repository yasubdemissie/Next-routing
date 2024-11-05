import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

function page({ params }) {
  const news = DUMMY_NEWS.find((news) => news.slug === params.slug);

  if (!news) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${news.image}`} alt={news.title} />
        <h1>{news.title}</h1>
        <time>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}

export default page;
