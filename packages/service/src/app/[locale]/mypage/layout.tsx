import Link from 'next/link';

export default function MyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Link href="/mypage">마이페이지로</Link>
      {children}
    </div>
  );
}
