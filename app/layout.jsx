import "./globals.css";

export const metadata = {
  title: "泡泡爪印宠物洗护店",
  description: "泡泡爪印宠物洗护店提供猫狗洗澡、吹护、修剪、耳眼清洁与皮毛护理服务。",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
