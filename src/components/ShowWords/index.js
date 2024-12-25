import './index.css'

const ShowWords = props => {
  const {details} = props
  return (
    <li>
      <p className="word">
        {details.word} : {details.word.length}
      </p>
    </li>
  )
}

export default ShowWords
