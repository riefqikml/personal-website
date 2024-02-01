import Link from "next/dist/client/link";

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Riefqi</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/content/about" target="_blank">
                About
              </Link>
            </li>
            <li>
              <details>
                <summary>Others</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link href="https://github.com/feir-afk" target="_blank">
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link href="/content/portfolio" target="_blank">
                      Portfolio
                    </Link>
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
