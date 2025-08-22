// src/components/Markdown.tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./Markdown.module.css";

type Props = { source: string };

export default function Markdown({ source }: Props) {
  return (
    <div className={`prose prose-gruvbox prose-lg max-w-none ${styles.root}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {source}
      </ReactMarkdown>
    </div>
  );
}
