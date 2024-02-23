"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const Navbar: React.FC = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const closeDropdown = () => {
		setIsDropdownOpen(false);
	};

	return (
		<div className="navbar bg-base-100 p-4 lg:px-8">
			<div className="flex-1">
				<Link href="/" className="btn btn-ghost text-xl rounded-box">
					Riefqi
				</Link>
			</div>
			<div className="flex-row">
				<Link href="/content/projects" className="btn btn-ghost rounded-box">
					<div tabIndex={0} role="button">
						Projects
					</div>
				</Link>
				<div className="dropdown dropdown-hover" ref={dropdownRef}>
					<p
						tabIndex={0}
						role="button"
						className="btn m-2 rounded-box"
						onClick={toggleDropdown}
					>
						Others
					</p>
					<ul
						tabIndex={0}
						className={`dropdown-content z-[1] menu p-2 shadow-xl bg-base-200 rounded-box ${
							isDropdownOpen ? "block" : "hidden"
						}`}
					>
						<li>
							<Link
								href="https://github.com/feir-afk?tab=repositories"
								target="_blank"
								onClick={closeDropdown}
							>
								Github
							</Link>
						</li>
						<li>
							<Link href="/content/about" onClick={closeDropdown}>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
