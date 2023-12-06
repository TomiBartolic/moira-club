const getApps = async () => {
  const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
  const ACCESS_TOKEN = 'jOlf3/Ac68d2Jwy54kH+/av6rwq3NridOhVKPtVay1k='

  const apiRes = await fetch(
    `${BASE_URL}content/section/moira-exclusives-games`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  )
  if (!apiRes.ok) {
    throw new Error('Fetch not ok')
  }
  return apiRes.json()
}

export default getApps
