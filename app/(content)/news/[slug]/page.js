import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

async function page({ params }) {
  // const path = usePathname();
  const news = await getNewsItem(params.slug);

  if (!news) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${params.slug}/photo`}>
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </Link>
        <h1>{news.title}</h1>
        <time>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}

export default page;
