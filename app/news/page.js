"use client";
import NewsList from "@/Components/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
// import { useRouter } from "next/router";

function page() {
  // const navigate = useRouter();

  return (
    <main>
      <h1>News</h1>
      <NewsList news={DUMMY_NEWS} />
    </main>
  );
}

export default page;
