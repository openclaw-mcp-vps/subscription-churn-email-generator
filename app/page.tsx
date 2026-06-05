export default function Home() {
  const faqs = [
    {
      q: 'How does the AI generate personalized emails?',
      a: 'You upload a CSV of churned users with cancellation reasons. Our AI analyzes patterns and crafts targeted emails with relevant offers for each churn segment.'
    },
    {
      q: 'What cancellation reasons does it handle?',
      a: 'Price sensitivity, missing features, low usage, competitor switch, and more. Each reason triggers a different retention strategy and email template.'
    },
    {
      q: 'Can I customize the email templates?',
      a: 'Yes. You get a full template editor, discount controls, and A/B testing. All emails are editable before sending or exporting to your ESP.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Retention
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Stop Churn Before It<br />
          <span className="text-[#58a6ff]">Costs You Everything</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your cancellation data and let AI generate hyper-personalized retention emails.
          Win back subscribers with the right message at the right moment.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200"
        >
          Start Saving Subscribers — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[['85%', 'Avg open rate'], ['3x', 'Retention lift'], ['< 2min', 'Setup time']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to fight churn</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited AI email generation',
              'CSV upload + API integration',
              'Churn reason segmentation',
              'Discount offer automation',
              'Campaign performance dashboard',
              'Export to Mailchimp, SendGrid'
            ].map(f => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ChurnShield. Built for SaaS founders.
      </footer>
    </main>
  )
}
