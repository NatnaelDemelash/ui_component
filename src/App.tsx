const App = () => {
  return (
	// NavBar
	<header className="w-full bg-white p-2 border-b">
		<div className="flex items-center h-16 px-10 sm:px-16 lg:px-44">
			<div className="mx-auto max-w-3xl w-full space-y-20">
				<div className="flex justify-between">
					<div className="flex flex-1 justify-start items-center">
						<a href="/" className="text-gray-800 text-lg h-10 flex items-center justify-center font-semibold">UI Components</a>
					</div>
					<div className="flex flex-1 justify-end items-center">
						<nav className="flex items-center space-x-1">
							<a href="/" className="text-sm h-10 p-2 font-semibold text-gray-800 hover:text-[#CD6155]">Doc</a>
							<a href="/" className="text-sm h-10 p-2 font-semibold text-gray-800 hover:text-[#CD6155]">Components</a>
							<a href="/" className="text-sm h-10 p-2 font-semibold text-gray-800 hover:text-[#CD6155]">GitHub</a>
						</nav>
					</div> 
				</div>
			</div>
		</div>
	</header>
	// MainContent
  )
}

export default App