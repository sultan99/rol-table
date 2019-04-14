const capitalize = str => (
  str.charAt(0).toUpperCase() + str.slice(1)
)

const toCapitalize = text => (
  text.split(` `).map(capitalize).join(` `)
)

function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function genFollowers() {
  const count = random(1, 5)
  const result = []
  for (let i = 0; i < count; i ++) {
    const id = random(0, 99)
    const gender = random(0, 1) ? `men` : `women`
    const url = `https://randomuser.me/api/portraits/${gender}/${id}.jpg`
    result.push(url)
  }

  return result
}

const pickData = ({results}) => results.map(item => ({
  id: item.login.uuid,
  address: toCapitalize(`${item.location.street}, ${item.location.city} `),
  email: item.email,
  followers: genFollowers(),
  fullName: toCapitalize(`${item.name.first} ${item.name.last}`),
  imgUrl: `https://picsum.photos/80/80/?random&id=${item.login.uuid}`,
}))

const fetchData = setData => () => {
  fetch(`https://randomuser.me/api/?nat=us,dk,fr,gb&results=10`)
    .then(response => response.json())
    .then(pickData)
    .then(setData)
}

export default fetchData
