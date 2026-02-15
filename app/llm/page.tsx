import { LLMSource } from '@kaleabdenbel/llmweb/adapters/next';
import { config } from '../../llmweb.config';

/**
 * Machine-readable identity page.
 * Accessible at /llm
 */
export default async function LLMPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>LLM Perspective</h1>
      <p>This page provides a machine-readable view of the site structure and dynamic data.</p>
      
      <LLMSource config={config as any} />
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Raw Configuration</h2>
        <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
          {JSON.stringify(config, null, 2)}
        </pre>
      </section>
    </div>
  );
}
