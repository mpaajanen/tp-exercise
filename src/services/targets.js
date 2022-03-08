import axios from 'axios'

const baseUrl = 'https://test.tpfons.fi/tpdemo/ext/back/api/v1-0000/donation/targets'
// const baseUrl = 'https://tpfons.fi/tpdemo/ext/back/api/v1-0000/donation/targets'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {
  getAll
}