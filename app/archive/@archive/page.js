import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

function Archive() {
  const newsYear = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {newsYear.map((year) => (
            <li>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Archive;
