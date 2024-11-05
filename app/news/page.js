'use client';
import Link from "next/link";
// import { useRouter } from "next/router";

function page() {

    // const navigate = useRouter();

  return (
    <main>
      <ul>
        <li>
        {/* <buton type="button" onClick={()=> navigate.push('123')}></buton> */}
          <Link href={"news/123"}>Abebe Beso</Link>{" "}
        </li>
        <li>
          <Link href={"news/392"}>Awtaru Kebede</Link>{" "}
        </li>
        <li>
          <Link href={"news/:3290"}>Temesgen Beyene</Link>{" "}
        </li>
      </ul>
    </main>
  );
}

export default page;
