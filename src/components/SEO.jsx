import PropTypes from "prop-types";
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="canonical" href="https://www.sample-app.com" />

        {/* OG Meta tags */}
        <meta property="og:type" content="web app" />
        <meta property="og:title" content={title} />
        <meta property='og:description' content={description} />

        {/* Twitter */}
        <meta name="twitter:creator" content="Sample App" />
        <meta name="twitter:card" content="web app" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default SEO;