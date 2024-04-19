import Container from "./components/site/Container"
import Section from "./components/site/Section"

const App = () => {
  return (
	<div className="relative min-h-screen bg-white">
	{/* NavBar */}
		<header className="w-full sticky top-0 z-50 bg-white p-2 border-b">
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
		{/* MainContent */}

		<main className="p-10 sm:px-16 lg:px-44">
			<div className="max-w-3xl mx-auto space-y-20">
				{/* Content Container */}
				<Container title="Component Heading title" description="Component dexription text">
						{/* Content section */}
						<Section title="Section Title with its own component" description="Section description text with its own component">
						<div className="bg-blue-500/50 p-3">component 1</div>
						<div className="bg-blue-500/50 p-3">component 2</div>
					</Section>	

					{/* Content section */}
					<Section title="Section Title with its own component" description="Section description text with its own component">
						<div className="bg-blue-500/50 p-3">component 1</div>
						<div className="bg-blue-500/50 p-3">component 2</div>
					</Section>	
				</Container>

				<Container title="Component Heading Title 2" description="Component description text 2">
					<Section title="Section Title with its own component" description="Section description text with its own component">
						<div className="bg-blue-500/50 p-3">component 3</div>
						<div className="bg-blue-500/50 p-3">component 4</div>
					</Section>	

					{/* Content section */}
					<Section title="Section Title with its own component" description="Section description text with its own component">
						<div className="bg-blue-500/50 p-3">component 3</div>
						<div className="bg-blue-500/50 p-3">component 4</div>
					</Section>	
				</Container>
			</div>
		</main>
	</div>
  )
}

export default App