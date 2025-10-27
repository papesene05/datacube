import Script from 'next/script'

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'LocalBusiness' | 'Service'
  data: any
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

export default StructuredData