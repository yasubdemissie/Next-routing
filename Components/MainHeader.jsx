import NavLink from "./NavLink";

function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <>
          <a href="/">Home</a>
        </>
      </div>
      <nav>
        <ul>
          <NavLink href="/archive">Archive</NavLink>
          <NavLink href="/news">News</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
