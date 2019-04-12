import λ from 'react-on-lambda'
import caption from 'components/caption'
import avatars from 'components/avatars'
import image from 'components/image'
import link from 'components/link'

const actions = (record, [onRemove]) => (
  link({href: `#`, onClick: () => onRemove(record.id)})(
    `remove`
  )
)

const author = props => caption({
  name: props.fullName,
  info: props.email
})

const followers = λ.compose(
  avatars,
  props => props.followers
)

const picture = λ.compose(
  image,
  props => props.imgUrl
)

const columns = [
  {title: `IMAGE`, render: picture},
  {title: `AUTHOR`, render: author},
  {title: `ADDRESS`, dataIndex: `address`},
  {title: `FOLLOWERS`, render: followers},
  {title: `ACTIONS`, render: actions},
]

export default columns
