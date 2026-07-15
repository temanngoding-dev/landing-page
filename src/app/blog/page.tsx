import { FiFileText } from 'react-icons/fi';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Teman Ngoding',
  description: 'Artikel dan tutorial seputar programming.',
};

export default function BlogPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20">
      <div className="mb-[24px]">
        <div className="font-mono text-[12px] text-mana mb-[8px] text-center">
          {'// DEVELOPMENT_MODE'}
        </div>
      </div>
      <div className="max-w-[600px] w-full text-center p-[40px] border-2 border-dashed border-line bg-bg-deep">
        <FiFileText className="mx-auto text-[56px] text-line-bright mb-[24px]" />
        <h1 className="font-pixel text-[24px] text-text-main mb-[16px]">Blog Segera Hadir</h1>
        <p className="font-mono text-[14px] text-text-dim leading-[1.8] mb-[32px] max-w-[400px] mx-auto">
          Fitur blog masih dalam proses build. Nanti bakal ada artikel, tips & trick, dan tutorial ngoding buat nambah EXP kamu!
        </p>
        <Link
          href="/"
          className="inline-flex font-mono text-[13px] text-mana border border-mana/40 px-[24px] py-[12px] hover:bg-[rgba(124,155,255,0.08)] transition-colors"
        >
          ← Kembali ke Home
        </Link>
      </div>
    </div>
  );
}
