import Link from "next/dist/client/link";

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 p-4 lg:px-8">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Riefqi
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/content/about">About</Link>
            </li>
            <li className="">
              <details>
                <summary>Others</summary>
                <ul className="p-2 bg-base-200 rounded-xl shadow-xl z-10">
                  <li>
                    <Link href="https://github.com/feir-afk" target="_blank">
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link href="/content/projects">Projects</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
