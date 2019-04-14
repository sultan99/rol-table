import λ from 'react-on-lambda'

const row = λ.tr`
  background-color: #f8f8f8;
  box-sizing: border-box;

  > th {
    color: #7a7a7c;
    font-size: 13px;
    font-weight: 600;
    padding: 20px;
    text-align: left;
  }

  > th:first-child{
    border-radius: 6px 0 0 6px;
  }

  > th:last-child{
    border-radius: 0 6px 6px 0;
  }
`

export default row
