import ButtonPage from './pages/ButtonPags'
import Accordion from './components/Accordion'

function App() {
  const items = [
    {
      id: 1,
      label: 'Can I use React on a project',
      content: 'You can use React on any project you want.',
    },
    {
      id: 2,
      label: 'Can I use JS on a project',
      content: 'You can use JS on any project you want.',
    },
    {
      id: 3,
      label: 'Can I use BootStrap on a project',
      content: 'You can use BootStrap on any project you want.',
    },
  ]
  return (
    <div>
      <ButtonPage />
      <Accordion items={items} />
    </div>
  )
}

export default App
