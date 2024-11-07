import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

function YearPage({ }) {
  const news = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {news.map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default YearPage;
