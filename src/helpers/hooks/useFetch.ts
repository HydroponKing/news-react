import {useEffect, useState} from "react";

interface FetchFunction

export const useFetch   = (fetchFunction, prams) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const stringPrams = prams ? new URLSearchParams(prams).toString() : "";


    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const result = await fetchFunction(prams)

                setData(result)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        })()
    }, [fetchFunction, stringPrams])

    return { data, isLoading, error  }
};