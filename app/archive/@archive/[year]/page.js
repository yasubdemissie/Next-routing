import NewsList from "@/Components/NewsList";
import { getNewsForYear } from "@/lib/news";

function YearPAge({ params }) {
  const news = getNewsForYear(params.year);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default YearPAge;
