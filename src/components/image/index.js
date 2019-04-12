import λ from 'react-on-lambda'

const img = λ.img`
  border-radius: 8px;
  height: 80px;
  width: 80px;
`

const image = src => (
  img({src})
)

export default image
