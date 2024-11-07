import NewsList from "@/Components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

function YearPage({ params }) {
  const newsYear = getAvailableNewsYears();
  let news, months;

  const selectedYear = params?.filter?.[0];
  const selectedMonth = params?.filter?.[1];

  news = <p>No News Found</p>;

  if (selectedYear && !selectedMonth) {
    const newsForYear = getNewsForYear(selectedYear);
    months = getAvailableNewsMonths(selectedYear);
    news = <NewsList news={newsForYear} />;
  }
  if (selectedYear && selectedMonth) {
    const newsOfMonth = getNewsForYearAndMonth(selectedYear, selectedMonth);
    news = <NewsList news={newsOfMonth} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          {selectedYear === undefined ? (
            <ul>
              {newsYear.map((year) => (
                <li key={year}>
                  <Link href={`/archive/${year}`}>{year}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {months?.map((month) => (
                <li key={month}>
                  <Link href={`/archive/${selectedYear}/${month}`}>
                    {month}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>
      {news}
    </>
  );
}

export default YearPage;
