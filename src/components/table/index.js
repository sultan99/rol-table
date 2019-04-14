import header from './header'
import body from './body'
import table from './table.sc'

const dataTable = ({rowKey, columns, actions, data}) => (
  table(
    header(columns),
    body({
      actions,
      columns,
      data,
      rowKey,
    })
  )
)

export default dataTable
