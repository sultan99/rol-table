import λ from 'react-on-lambda'
import avatars from 'components/avatars'
import image from 'components/image'
import link from 'components/link'
import titleDesc from 'components/title-desc'

const actions = (record, {onRemove}) => (
  link({href: `#`, onClick: () => onRemove(record.id)})(
    `remove`
  )
)

const author = props => titleDesc(
  props.fullName,
  props.email
)

const followers = λ.compose(
  avatars,
  props => props.followers
)

const picture = λ.compose(
  image,
  props => ({src: props.imgUrl})
)

const columns = [
  {title: `IMAGE`, render: picture},
  {title: `AUTHOR`, render: author},
  {title: `ADDRESS`, render: `address`},
  {title: `FOLLOWERS`, render: followers},
  {title: `ACTIONS`, render: actions},
]

export default columns
