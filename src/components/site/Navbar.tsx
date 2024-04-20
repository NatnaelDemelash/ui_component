const Navbar = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white p-2">
			<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
				<div className="mx-auto w-full max-w-3xl space-y-20">
					<div className="flex justify-between">
						<div className="flex flex-1 items-center justify-start">
							<a
								href="/"
								className="flex h-10 items-center justify-center text-lg font-semibold text-gray-800"
							>
								UI Components
							</a>
						</div>
						<div className="flex flex-1 items-center justify-end">
							<nav className="flex items-center space-x-1">
								<a
									href="/"
									className="h-10 p-2 text-sm font-semibold text-gray-800 hover:text-[#CD6155]"
								>
									Doc
								</a>
								<a
									href="/"
									className="h-10 p-2 text-sm font-semibold text-gray-800 hover:text-[#CD6155]"
								>
									Components
								</a>
								<a
									href="/"
									className="h-10 p-2 text-sm font-semibold text-gray-800 hover:text-[#CD6155]"
								>
									GitHub
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
