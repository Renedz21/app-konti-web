import Navigation from "@/components/shared/navigation";
import { readFile } from "fs/promises";
import { join } from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function getMarkdownContent(filename: string): Promise<string> {
  const filePath = join(process.cwd(), "data", filename);
  const content = await readFile(filePath, "utf-8");
  return content;
}

const markdownComponents = {
  h1: ({ ...props }) => (
    <h1
      className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4 first:mt-0"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4 first:mt-0"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className="text-lg md:text-xl font-semibold text-foreground mt-6 mb-3 first:mt-0"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p
      className="text-foreground mb-4 leading-relaxed text-sm md:text-base"
      {...props}
    />
  ),
  ul: ({ ...props }) => (
    <ul
      className="list-disc list-outside mb-4 space-y-2 text-foreground text-sm md:text-base ml-6"
      {...props}
    />
  ),
  ol: ({ ...props }) => (
    <ol
      className="list-decimal list-outside mb-4 space-y-2 text-foreground text-sm md:text-base ml-6"
      {...props}
    />
  ),
  li: ({ ...props }) => <li className="text-foreground pl-2" {...props} />,
  a: ({ ...props }) => (
    <a className="text-primary hover:underline font-medium" {...props} />
  ),
  strong: ({ ...props }) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: ({ ...props }) => <em className="italic text-foreground" {...props} />,
};

export default async function Terms() {
  const termsContent = await getMarkdownContent("terms.md");
  const privacyContent = await getMarkdownContent("privacy.md");
  const eulaContent = await getMarkdownContent("eula.md");

  return (
    <div className="w-full bg-background min-h-screen">
      <Navigation isTermsPage={true} />
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Terms Section */}
          <section className="mb-12 md:mb-16">
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {termsContent}
              </ReactMarkdown>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-border my-12 md:my-16" />

          {/* Privacy Section */}
          <section className="mb-12 md:mb-16">
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {privacyContent}
              </ReactMarkdown>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-border my-12 md:my-16" />

          {/* EULA Section */}
          <section className="mb-12 md:mb-16">
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {eulaContent}
              </ReactMarkdown>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
