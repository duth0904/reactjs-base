import { useState, useCallback } from 'react'

const useHttp = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSendRequest = useCallback(
    async (requestInfo: any, handleResponse: any) => {
      setIsLoading(true)
      setError(null)
      try {
        const res = await fetch(requestInfo.url, {
          method: requestInfo.method,
          body: requestInfo.body,
          headers: requestInfo.headers,
        })

        handleResponse(res)
      } catch (error: any) {
        setError(error.message)
      }
    },
    [],
  )

  return {
    error,
    isLoading,
    handleSendRequest,
  }
}

export default useHttp
