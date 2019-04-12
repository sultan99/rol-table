import {useState, useEffect} from 'react'
import λ from 'react-on-lambda'
import columns from './columns'
import fetchData from './fetch-data'
import header from 'components/header'
import table from 'components/table'
import wrapper from './wrapper.sc'

function app() {
  const [data, setData] = useState([])
  const onRemove = id => {
    const newData = data.filter(item => item.id !== id)
    setData(newData)
  }
  useEffect(fetchData(setData), [])

  return wrapper(
    header(`Test table`),
    table({
      actions: [onRemove],
      columns,
      data,
      rowKey: `id`,
    })
  )
}

export default λ(app)
