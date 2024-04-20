import Container from "./components/site/Container"
import Layout from "./components/site/Layout"
import Section from "./components/site/Section"

const App = () => {
	return (
		<Layout>
			<Container
				title="Component Heading title"
				description="Component dexription text"
			>
				{/* Content section */}
				<Section
					title="Section Title with its own component"
					description="Section description text with its own component"
				>
					<div className="bg-blue-500/50 p-3">component 1</div>
					<div className="bg-blue-500/50 p-3">component 2</div>
				</Section>

				{/* Content section */}
				<Section
					title="Section Title with its own component"
					description="Section description text with its own component"
				>
					<div className="bg-blue-500/50 p-3">component 1</div>
					<div className="bg-blue-500/50 p-3">component 2</div>
				</Section>
			</Container>

			<Container
				title="Component Heading Title 2"
				description="Component description text 2"
			>
				<Section
					title="Section Title with its own component"
					description="Section description text with its own component"
				>
					<div className="bg-blue-500/50 p-3">component 3</div>
					<div className="bg-blue-500/50 p-3">component 4</div>
				</Section>

				{/* Content section */}
				<Section
					title="Section Title with its own component"
					description="Section description text with its own component"
				>
					<div className="bg-blue-500/50 p-3">component 3</div>
					<div className="bg-blue-500/50 p-3">component 4</div>
				</Section>
			</Container>

			<Container
				title="Component Heading Title 3"
				description="Component description text 3"
			>
				<Section
					title="Section Title with its own component"
					description="Section description text with its own component"
				>
					<div className="bg-blue-500/50 p-3">component 3</div>
					<div className="bg-blue-500/50 p-3">component 4</div>
				</Section>

				{/* Content section */}
				<Section
					title="Section Title with its own component"
					description="Section description text with its own component"
				>
					<div className="bg-blue-500/50 p-3">component 3</div>
					<div className="bg-blue-500/50 p-3">component 4</div>
				</Section>
			</Container>
		</Layout>
	)
}

export default App
