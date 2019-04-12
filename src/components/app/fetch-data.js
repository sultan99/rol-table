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

const normalize = rawData => rawData.results.map(item => ({
  id: item.login.uuid,
  imgUrl: `https://picsum.photos/80/80/?random&id=${item.login.uuid}`,
  fullName: `${item.name.first} ${item.name.last}`,
  email: item.email,
  address: `${item.location.street}, ${item.location.city} `,
  followers: genFollowers()
}))

const fetchData = setData => () => {
  fetch(`https://randomuser.me/api/?nat=us,dk,fr,gb&results=10`)
    .then(response => response.json())
    .then(rawData => normalize(rawData))
    .then(result => setData(result))
}

export default fetchData
