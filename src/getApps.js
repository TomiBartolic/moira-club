const getApps = async () => {
    
const BASE_URL = 'https://cms-nocache-api.d1b.pw/';
const ACCESS_TOKEN = '9eHVwGxzq+C1QICIVCCZaqQRpoNgmnD6aMsUAAzxwWg=';


    const apiRes = await fetch(`${BASE_URL}content/section/moira-exclusives-games`, {

        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
        }
    });
    if(!apiRes.ok) {
        throw new Error("Fetch not ok")
    }

    return apiRes.json()
}

export default getApps;