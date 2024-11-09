import ModalBackDrop from "@/Components/ModalBackDrop";
import { getAllNews, getNewsItem } from "@/lib/news";

async function Intercepted({ params }) {
  const slug = params.slug;
  const Image = await getNewsItem(slug);

  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-modal">
          <img src={`/images/news/${Image.image}`} alt="Image you clicked" />
        </div>
      </dialog>
    </>
  );
}

export default Intercepted;
