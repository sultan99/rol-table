import λ from 'react-on-lambda'

const wrapper = λ.div`
  min-width: 140px;

  > img {
    background-color: white;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.05);
    height: 30px;
    width: 30px;
  }

  > img + img {
    margin-left: -8px;
  }
`

export default wrapper
