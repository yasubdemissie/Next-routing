import { getAllNews } from "@/lib/news";

function NormalImage({ params }) {
  const slug = params.slug;
  const image = getAllNews().find((news) => news.slug === slug).image;
  return (
    <>
      <h2>Normal Image</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${image}`} alt="Image you clicked" />
      </div>
    </>
  );
}

export default NormalImage;
