"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
// import { useRouter } from "next/router";

function page() {
  // const navigate = useRouter();

  return (
    <main>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`news/${news.slug}`}>
              <img src={`/images/news/${news.image}`} alt={news.title} />
              <span>{news.title}</span>
            </Link>{" "}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default page;
