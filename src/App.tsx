import Button from "./components/library/Button"
import Container from "./components/site/Container"
import Layout from "./components/site/Layout"
import Section from "./components/site/Section"

const App = () => {
	return (
		<Layout>
			<Container
				title="Button"
				description="A Button is a widget that enable users to trigger an actions or events such as submitting a form, opening a dialog, canceling an action or performing a delete operation"
			>
				{/* Content section */}
				<Section
					title="Primary"
					description="Primary actions should be obvious, solid, high contrast background colors work great here"
				>
					<Button>Hello</Button>
				</Section>

				{/* Content section */}
				<Section
					title="Secondary"
					description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options"
				>
					<div className="bg-blue-500/50 p-3">component 1</div>
					<div className="bg-blue-500/50 p-3">component 2</div>
				</Section>

				{/* Content section */}
				<Section
					title="Tertiary"
					description="Tertiary action should be discoverable but unobtrusive. Styling these actions like links is usually the best approach"
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
