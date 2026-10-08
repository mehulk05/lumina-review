import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, DISCLOSURE, SITE_NAME, SITE_OWNER } from '../constants';
import { usePageMeta } from '../hooks/usePageMeta';

const Prose: React.FC<{ title: string; updated: string; children: React.ReactNode }> = ({
  title,
  updated,
  children
}) => (
  <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-3">{title}</h1>
    <p className="text-sm text-slate-400 mb-10">Last updated {updated}</p>
    <div className="space-y-5 text-slate-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_a]:text-indigo-600 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
      {children}
    </div>
  </article>
);

export const AboutPage: React.FC = () => {
  usePageMeta(
    `About — ${SITE_NAME}`,
    `Who writes ${SITE_NAME}, how we pick products, and how the site is funded.`
  );
  return (
    <Prose title="About LuminaReviews" updated="8 October 2026">
      <p>
        LuminaReviews is a small independent product-review site covering consumer electronics
        sold in India. It is written and run by {SITE_OWNER}.
      </p>
      <h2>What we do</h2>
      <p>
        We publish detailed written reviews and comparisons of products we have researched against
        primary sources — retailer specification sheets, manufacturer documentation, published
        measurements, and owner reports. Every review lists the sources we used so you can check
        our work.
      </p>
      <h2>What we do not do</h2>
      <ul>
        <li>
          We do not accept payment, free product, or editorial input from manufacturers in exchange
          for coverage or for a particular verdict.
        </li>
        <li>
          We do not publish a recommendation we would not give a friend, and we say plainly when a
          product is not worth its price.
        </li>
        <li>
          We do not claim to have tested something we have not. Where our conclusion rests on
          published specifications rather than hands-on use, we say so in the review.
        </li>
      </ul>
      <h2>How the site is funded</h2>
      <p>{DISCLOSURE}</p>
      <p>
        See our <Link to="/editorial-policy">editorial policy</Link> for how this is kept separate
        from what we recommend.
      </p>
      <h2>Contact</h2>
      <p>
        Corrections, questions, and complaints are all welcome at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If we get something wrong, tell us
        and we will fix it and note the change.
      </p>
    </Prose>
  );
};

export const ContactPage: React.FC = () => {
  usePageMeta(`Contact — ${SITE_NAME}`, `How to reach ${SITE_NAME} about corrections or questions.`);
  return (
    <Prose title="Contact" updated="8 October 2026">
      <p>
        The fastest way to reach us is email. We read everything, and we reply to corrections
        first.
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6">
        <p className="font-semibold text-slate-900 mb-1">Email</p>
        <p className="mb-4">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p className="font-semibold text-slate-900 mb-1">Published by</p>
        <p>{SITE_OWNER}, India</p>
      </div>
      <h2>Corrections</h2>
      <p>
        If you find a factual error — a wrong specification, a stale price, a broken link — please
        say which review and what is wrong. We correct the page and add a dated note explaining
        what changed.
      </p>
      <h2>For manufacturers and PR</h2>
      <p>
        We do not run sponsored posts, paid placements, or guest articles. We will not agree to
        review terms in advance. You are welcome to send factual corrections about your product and
        we will check them like any other source.
      </p>
    </Prose>
  );
};

export const EditorialPolicyPage: React.FC = () => {
  usePageMeta(
    `Editorial policy — ${SITE_NAME}`,
    'How we research, how we handle affiliate links, and how we correct mistakes.'
  );
  return (
    <Prose title="Editorial policy" updated="8 October 2026">
      <h2>How we research a product</h2>
      <p>
        We start from primary sources: the retailer&rsquo;s own specification fields, the
        manufacturer&rsquo;s documentation, and published measurements where they exist. We prefer
        the specification field over the marketing title, because the two often disagree — one of
        our own reviews turned on exactly that discrepancy.
      </p>
      <p>
        Where we rely on owner reports or forum discussion, we label them as anecdotes rather than
        presenting them as measured data.
      </p>
      <h2>What we will not publish</h2>
      <ul>
        <li>A review of a product we have not actually researched.</li>
        <li>A claim about a feature or capability we cannot point to a source for.</li>
        <li>Invented ratings, invented test results, or statistics we have not measured.</li>
        <li>A verdict influenced by which product pays a higher commission rate.</li>
      </ul>
      <h2>Affiliate links</h2>
      <p>{DISCLOSURE}</p>
      <p>
        Commission rates differ between product categories. We do not take that into account when
        deciding what to recommend, and several of our reviews recommend the cheaper option or tell
        you not to buy at all.
      </p>
      <h2>Prices</h2>
      <p>
        Every price we publish is a snapshot with the date we checked it. Indian retail pricing
        moves constantly, especially during sale periods, so treat our figures as a guide and check
        the live listing before buying.
      </p>
      <h2>Corrections</h2>
      <p>
        Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We fix confirmed errors and
        note the correction with its date on the affected page.
      </p>
    </Prose>
  );
};

export const PrivacyPolicyPage: React.FC = () => {
  usePageMeta(
    `Privacy policy — ${SITE_NAME}`,
    `What data ${SITE_NAME} collects, what third parties are involved, and your choices.`
  );
  return (
    <Prose title="Privacy policy" updated="8 October 2026">
      <p>
        This policy explains what happens to data when you visit {SITE_NAME} at this website. It
        is written to be read, not to be skimmed past.
      </p>

      <h2>What we collect directly</h2>
      <p>
        Nothing. We do not run accounts, we do not have a login, we do not run a newsletter, and we
        do not ask you for your name, email address, or any other personal detail. There is no
        contact form on this site — the contact page gives you an email address instead, so you
        choose what to send us.
      </p>

      <h2>Cookies</h2>
      <p>
        We do not set cookies of our own, and we do not run our own analytics. Third parties
        described below may set cookies when you interact with them.
      </p>

      <h2>Third parties</h2>
      <ul>
        <li>
          <strong>Amazon.</strong> Links to Amazon on this site carry our Associates tracking
          identifier. If you click one, Amazon can record that the visit came from us, and may set
          cookies in your browser in order to attribute any purchase. That process is governed by
          Amazon&rsquo;s own privacy notice, not ours. We never see your name, address, payment
          details, or what you bought — our reporting shows only aggregate totals.
        </li>
        <li>
          <strong>Vercel.</strong> This site is hosted on Vercel, which processes standard server
          request data (including IP address) in order to serve pages and protect against abuse.
        </li>
        <li>
          <strong>Fonts and images.</strong> Pages load fonts from Google Fonts and some images
          from Unsplash. Requesting those files exposes your IP address to those services.
        </li>
      </ul>

      <h2>Your choices</h2>
      <p>
        You can block or clear cookies in your browser settings. Blocking Amazon&rsquo;s cookies
        will not stop the site working — it only prevents a purchase being attributed to us. You
        can also use a tracker-blocking extension; we do not detect or work around them.
      </p>

      <h2>Children</h2>
      <p>This site is not directed at children under 13, and we do not knowingly collect data from them.</p>

      <h2>Changes</h2>
      <p>
        If this policy changes we will update the date at the top of this page. Material changes
        will be described rather than quietly substituted.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy, or a request about data you believe we hold, go to{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </Prose>
  );
};

export const NotFoundPage: React.FC = () => {
  usePageMeta(`Page not found — ${SITE_NAME}`, 'That page does not exist.');
  return (
    <div className="max-w-xl mx-auto px-4 py-28 text-center">
      <h1 className="text-5xl font-serif text-slate-900 mb-4">Page not found</h1>
      <p className="text-slate-600 mb-8">
        That link does not point anywhere on this site. It may have been moved or mistyped.
      </p>
      <Link
        to="/"
        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        Back to reviews
      </Link>
    </div>
  );
};
