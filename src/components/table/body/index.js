import λ from 'react-on-lambda'
import row from './row.sc'

const toCell = (record, actions) => (column, key) => {
  const {render} = column
  const value = typeof render === `function`
    ? render(record, actions)
    : record[render]

  return λ.td({key}, value)
}

function body(props) {
  const {actions, columns, data, rowKey} = props
  const makeRows = λ.compose(
    λ.tbody,
    λ.mapKey(record =>
      row({key: record[rowKey]})(
        columns.map(toCell(record, actions))
      )
    )
  )

  return makeRows(data)
}

export default body
