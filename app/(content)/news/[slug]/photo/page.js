import { getNewsItem } from "@/lib/news";

async function NormalImage({ params }) {
  const slug = params.slug;
  const Image = await getNewsItem(slug);
  return (
    <>
      <h2>Normal Image</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${Image.image}`} alt="Image you clicked" />
      </div>
    </>
  );
}

export default NormalImage;
