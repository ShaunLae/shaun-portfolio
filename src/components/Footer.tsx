interface FooterProps {
  text: string;
}

export function Footer({ text }: FooterProps) {
  return (
    <footer className="px-7 pb-12 pt-8 text-center text-[0.82rem] text-textMuted">{text}</footer>
  );
}
