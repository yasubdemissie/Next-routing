import { getAllNews } from "@/lib/news";

function Intercepted({ params }) {
  const slug = params.slug;
  const image = getAllNews().find((news) => news.slug === slug).image;
  return (
    <>
      <h2>Intercepted Image</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${image}`} alt="Image you clicked" />
      </div>
    </>
  );
}

export default Intercepted;
