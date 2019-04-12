import λ from 'react-on-lambda'
import row from './row.sc'

const header = λ.compose(
  λ.thead,
  row,
  λ.mapKey(λ.th),
  λ.mapProps({children: `title`})
)

export default header
