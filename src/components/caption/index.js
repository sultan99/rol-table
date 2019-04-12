import λ from 'react-on-lambda'
import description from './description.sc'
import title from './title.sc'

const caption = ({name, info}) => (
  λ.div(
    title(name),
    description(info)
  )
)

export default caption
