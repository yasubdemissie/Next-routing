import NewsList from "@/Components/NewsList";
// import { DUMMY_NEWS } from "@/dummy-news";

async function page() {
  const response = await fetch("http://localhost:8081/news");

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const news = await response.json();

  return (
    <main>
      <h1>News</h1>
      <NewsList news={news} />
    </main>
  );
}

export default page;
