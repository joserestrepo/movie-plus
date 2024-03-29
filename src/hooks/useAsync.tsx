import { useEffect, useState } from 'react'

const useAsync = (
  asyncFn: () => Promise<any>,
  successFunction: Function,
  returnFunction: Function,
  dependencies: any[] = [],
) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    let isActive = true
    asyncFn()
      .then((result) => {
        if (isActive) {
          successFunction(result.data)
        }
      })
      .finally(() => {
        setLoading(false)
      })
    return () => {
      returnFunction && returnFunction()
      isActive = false
      setLoading(false)
    }
  }, dependencies)

  return { loading }
}

export default useAsync
