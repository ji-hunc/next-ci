/** @type {import('next').NextConfig} */
const nextConfig = {
  // trycloudflare / ngrok 도메인은 매번 랜덤이라, dev 서버의 cross-origin
  // 경고를 피하기 위해 개발 origin을 넓게 허용해 둡니다.
  allowedDevOrigins: ["*.trycloudflare.com", "*.ngrok-free.app"],
};

export default nextConfig;
