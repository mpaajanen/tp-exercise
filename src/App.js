export default function App() {
  const axios = require('axios').default

  axios.get('https://test.tpfons.fi/tpdemo/ext/back/api/v1-0000/donation/targets')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
  
  return (
    <div>
      <h1>Otsikko</h1>
    </div>
  )
}