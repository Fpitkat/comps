import ButtonPage from './pages/ButtonPags'
import Accordion from './components/Accordion'

function App() {
  const items = [
    {
      id: 1,
      label: 'Can I use React on a project',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam soluta architecto enim pariatur, possimus ipsa. Cupiditate ratione ab ex recusandae quod officiis molestias deserunt delectus? Animi necessitatibus magni maxime laudantium tempore iure ullam, asperiores iste amet optio vel alias consequatur numquam consequuntur aspernatur doloremque architecto error ut aut dolorum.',
    },
    {
      id: 2,
      label: 'Can I use JS on a project',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam id quis harum facere facilis doloremque neque, ullam dignissimos voluptatem.',
    },
    {
      id: 3,
      label: 'Can I use BootStrap on a project',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum laborum aliquid dolorem fugit nobis minima aspernatur obcaecati, possimus quis similique? Ab, ex doloribus? Ea, natus.',
    },
    {
      id: 4,
      label: 'Can I use Tailwind css on a project',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda dolor alias voluptates laboriosam, iste rerum!',
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
