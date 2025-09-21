type Item = {
    title: string;
    org: string;
    period: string;
    bullets: string[];
  };
  
  export default function Timeline({ items }: { items: Item[] }){
    return (
      <ol className="relative ms-3 space-y-6">
        {items.map((it, idx) => (
          <li key={idx} className="ps-6">
            <span className="absolute left-0 top-1.5 size-3 rounded-full"
                  style={{ background: "rgb(var(--accent))" }} />
            <h3 className="text-lg font-semibold">{it.title} · <span className="text-neutral-400">{it.org}</span></h3>
            <div className="text-sm text-neutral-400 mb-2">{it.period}</div>
            <ul className="list-disc ms-6 text-neutral-300 space-y-1">
              {it.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
            </ul>
          </li>
        ))}
      </ol>
    );
  }
  