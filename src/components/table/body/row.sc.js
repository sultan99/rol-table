import λ from 'react-on-lambda'

const row = λ.tr`
  border-bottom: 1px solid #eaedf3;
  box-sizing: border-box;

  > td {
    color: #252529;
    font-size: 15px;
    font-weight: 400;
    padding: 20px;
  }

  &:hover {
    background: repeating-linear-gradient(
      45deg,
      #f5fcff,
      #f5fcff 4px,
      #ffff 4px,
      #ffff 8px
    );
  }
`

export default row
