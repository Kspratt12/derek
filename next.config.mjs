/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Prevent the site from being rendered inside an iframe on another
          // domain (defends against clickjacking).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Stops browsers from MIME-sniffing the response away from the
          // Content-Type header.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Only send full URL as referrer when origin is the same; strip
          // query strings on cross-origin.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disable browser APIs we do not use (camera, mic, geolocation).
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          // Enforce HTTPS for 1 year, including subdomains.
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          // Prevent cross-origin script and iframe embeds from pulling data.
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
