import * as React from 'react'

export function useFetchQuote(url) {
  const [quote, setQuote] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function getStarWarsQuote() {
      setLoading(true)
      // Get initial text
      const response = await fetch(url)
      const data = await response.json()
      const quote = data.title
      setQuote(quote)
      setLoading(false)
    }
    getStarWarsQuote()
  }, [url])

  return { quote, loading }
}
