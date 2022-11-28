import Button from './Button'

function App() {
  return (
    <div>
      <div>
        <Button
          primary
          outline>
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>Hide ads</Button>
      </div>
      <div>
        <Button warning>Buy now</Button>
      </div>
      <div>
        <Button
          danger
          rounded>
          Delete
        </Button>
        <div>
          <Button success>Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default App
