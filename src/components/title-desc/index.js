import λ from 'react-on-lambda'
import description from './description.sc'
import title from './title.sc'

const titleDesc = (caption, info) => (
  λ.div(
    title(caption),
    description(info)
  )
)

export default titleDesc
