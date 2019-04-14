import λ from 'react-on-lambda'
import wrapper from './wrapper.sc'

const avatars = λ.compose(
  wrapper,
  λ.mapKey((url, key) =>
    λ.img({key, src: url})
  )
)

export default avatars
