import λ from 'react-on-lambda'
import row from './row.sc'

const toCell = (record, actions) => (column, key) => {
  const {dataIndex, render} = column
  const value = render
    ? render(record, actions)
    : record[dataIndex]
  return λ.td({key}, value)
}

function body(props) {
  const {actions, columns, data, rowKey} = props
  const makeRows = λ.compose(
    λ.tbody,
    λ.fragment,
    λ.mapKey(record =>
      row({key: record[rowKey]})(
        columns.map(toCell(record, actions))
      )
    )
  )
  return makeRows(data)
}

export default body
