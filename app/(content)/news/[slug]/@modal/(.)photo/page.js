"use client";
import { getAllNews } from "@/lib/news";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function Intercepted({ params }) {
  const navigate = useRouter();
  const slug = params.slug;
  const image = getAllNews().find((news) => news.slug === slug).image;
  return (
    <>
      <div
        className="modal-backdrop"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            navigate.back();
          }
        }}
      >
        <dialog className="modal" open>
          <div className="fullscreen-modal">
            <img src={`/images/news/${image}`} alt="Image you clicked" />
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Intercepted;
