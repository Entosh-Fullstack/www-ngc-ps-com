import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName, linkResolver } from '../prismicio'
import '../styles/globals.css'
import '../styles/navigation.css'
import '../styles/product-pages.css'
import '../styles/product-detail.css'
import '../styles/product-slider.css'
import '../styles/sidebar-dropdown.css'
import '../styles/grid-section.css'
import '../styles/hero-section.css'
import { ChakraProvider } from '@chakra-ui/react'
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          (<Link href={href}
            {...props}>
          </Link>)
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </ChakraProvider>
  );
}