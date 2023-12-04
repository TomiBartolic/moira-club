import { useEffect, useState } from "react";

const BASE_URL = 'https://cms-nocache-api.d1b.pw/';
const ACCESS_TOKEN = '9eHVwGxzq+C1QICIVCCZaqQRpoNgmnD6aMsUAAzxwWg=';

export function PageHome() {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        const getApps = async () => {
            try {
                const response = await fetch(`${BASE_URL}content/section/moira-exclusives-games`, {
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const apps = await response.json();
                
                setApps(apps);
            } catch (error) {
                console.error('Error fetching apps:', error);
            }
        };

        getApps();
        console.log(apps, "apps")
    }, [apps]);

    return (
        <div className="games">
            <h1>Apps</h1>
            <ul>
                {apps.map((app) => (
                    <li key={app.id}>{app.title}</li>
                ))}
            </ul>
        </div>
    );
}