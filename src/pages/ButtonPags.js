import Button from '../components/Button'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function ButtonPage() {
  const handleClick = () => {
    console.log('Clicked')
  }
  return (
    <div>
      <div>
        <Button
          primary
          outline
          onClick={handleClick}
          className='my-5'>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Hide ads
        </Button>
      </div>
      <div>
        <Button warning>Buy now</Button>
      </div>
      <div>
        <Button
          danger
          rounded>
          <GoDatabase />
          Delete
        </Button>
        <div>
          <Button success>Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default ButtonPage
