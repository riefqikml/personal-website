import Link from "next/dist/client/link";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-4 lg:px-8">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl rounded-box">
          Riefqi
        </Link>
      </div>
      <div className="flex-row">
        <Link href="/content/about" className="btn btn-ghost rounded-box">
          <div tabIndex={0} role="button">
            About
          </div>
        </Link>
        <div className="dropdown dropdown-hover">
          <p tabIndex={0} role="button" className="btn m-2 rounded-box">Others</p>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-200 rounded-box">
            <li>
              <Link href="https://github.com/feir-afk" target="_blank">
                Github
              </Link>
            </li>
            <li>
              <Link href="/content/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
