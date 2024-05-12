import { useEffect, useMemo, useState } from "react";

const useTelegramAPI = () => {
    // 1877793901
    const [userID, setUserID] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getTelegramUserId = useMemo(() => {
        setIsLoading(true);

        if (window?.Telegram?.WebApp?.initData) {
            const tgUserID = JSON.parse(new URLSearchParams(window?.Telegram?.WebApp?.initData).get("user")).id;

            return tgUserID;
        }

        return 0;
    }, []);

    useEffect(() => {
        const tgUserID = getTelegramUserId;

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        tgUserID && setUserID(tgUserID);
    }, [getTelegramUserId]); 
    
    return {
        TGUserID: userID,
        isTGFetching: isLoading
    };
}

export default useTelegramAPI;