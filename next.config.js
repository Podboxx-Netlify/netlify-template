module.exports = {
  env: {
    station_id: 71,
    NEXT_IMAGE_ALLOWED_DOMAINS: "podboxx-production.s3.amazonaws.com,podboxx-development.s3.amazonaws.com,next.podboxx.com",
    FORCE_WEBP_OUTPUT: "true"
  },
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['source.unsplash.com', 'localhost', 'podboxx-production.s3.amazonaws.com', 'podboxx-development.s3.amazonaws.com', 'next.podboxx.com'],
  },
}