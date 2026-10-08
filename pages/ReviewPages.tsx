import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { REVIEWS, getReviewBySlug } from '../content/reviews';
import { DISCLOSURE, SITE_NAME, withTag } from '../constants';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFoundPage } from './InfoPages';
import { StaticReview } from '../types';

const AffiliateNote: React.FC = () => (
  <p className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
    {DISCLOSURE}
  </p>
);

const ReviewCard: React.FC<{ review: StaticReview }> = ({ review }) => (
  <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow flex flex-col h-full">
    <Link to={`/reviews/${review.slug}`} className="block aspect-video overflow-hidden bg-slate-100">
      <img src={review.imageUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
    </Link>
    <div className="p-6 flex flex-col flex-grow">
      <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-3">
        {review.category}
      </span>
      <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
        <Link to={`/reviews/${review.slug}`} className="hover:text-indigo-600">
          {review.title}
        </Link>
      </h3>
      <p className="text-slate-600 text-sm mb-5 flex-grow line-clamp-3">{review.bottomLine}</p>
      <div className="flex items-center justify-between gap-3">
        <Link
          to={`/reviews/${review.slug}`}
          className="flex-1 py-2.5 rounded-xl border border-indigo-600 text-indigo-600 text-sm font-semibold text-center hover:bg-indigo-50 transition"
        >
          Read review
        </Link>
        <a
          href={withTag(review.amazonUrl)}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold text-center hover:bg-indigo-700 transition"
        >
          Check price
        </a>
      </div>
    </div>
  </article>
);

export const HomePage: React.FC = () => {
  usePageMeta(
    `${SITE_NAME} — honest product reviews for India`,
    'Detailed, sourced reviews of electronics sold in India. We show our working and tell you when something is not worth the money.'
  );

  return (
    <div className="pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
          Reviews that show their working.
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">
          We research products against retailer specification sheets, manufacturer documentation and
          owner reports — then list every source so you can check us. When something is not worth
          its price, we say so.
        </p>
        <div className="max-w-2xl mx-auto">
          <AffiliateNote />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-slate-900 mb-2">Latest reviews</h2>
        <p className="text-slate-500 mb-10">
          {REVIEWS.length} published. Each one lists the sources it is based on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.slug} review={r} />
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-24">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-serif text-slate-900 mb-4">How we work</h2>
          <ul className="space-y-3 text-slate-700">
            <li>
              <strong className="text-slate-900">Primary sources first.</strong> We read the
              retailer&rsquo;s specification field, not the marketing title — they often disagree.
            </li>
            <li>
              <strong className="text-slate-900">Anecdotes are labelled as anecdotes.</strong> Owner
              reports are useful, but we never present them as measurements.
            </li>
            <li>
              <strong className="text-slate-900">We say what we do not know.</strong> If a figure
              is not published anywhere, we write that instead of guessing.
            </li>
            <li>
              <strong className="text-slate-900">Commission never decides a verdict.</strong>{' '}
              <Link to="/editorial-policy" className="text-indigo-600 underline">
                Read the editorial policy
              </Link>
              .
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export const ReviewsIndexPage: React.FC = () => {
  usePageMeta(
    `All reviews — ${SITE_NAME}`,
    'Every review published on LuminaReviews, newest first.'
  );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif text-slate-900 mb-10">All reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REVIEWS.map((r) => (
          <ReviewCard key={r.slug} review={r} />
        ))}
      </div>
    </div>
  );
};

export const ReviewArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const review = slug ? getReviewBySlug(slug) : undefined;

  usePageMeta(
    review ? `${review.title} — ${SITE_NAME}` : `Not found — ${SITE_NAME}`,
    review?.metaDescription ?? '',
    review?.imageUrl
  );

  if (!review) return <NotFoundPage />;

  const link = withTag(review.amazonUrl);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link to="/reviews" className="text-sm text-slate-500 hover:text-indigo-600">
        ← All reviews
      </Link>

      <header className="mt-6 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          {review.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mt-3 mb-5 leading-tight">
          {review.title}
        </h1>
        <p className="text-sm text-slate-500">
          By {review.author} · Published{' '}
          {new Date(review.publishedAt).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
          {review.updatedAt !== review.publishedAt && ' · Updated'}
        </p>
      </header>

      <img
        src={review.imageUrl}
        alt=""
        className="w-full aspect-video object-cover rounded-2xl mb-4"
      />
      {review.imageCredit && (
        <p className="text-xs text-slate-400 mb-10">
          Illustrative image, {review.imageCredit}. Not a photograph of the review unit.
        </p>
      )}

      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-700 mb-3">
          The bottom line
        </h2>
        <p className="text-slate-800 leading-relaxed">{review.bottomLine}</p>
        <p className="text-sm text-slate-500 mt-4">Price at review: {review.priceAtReview}</p>
      </div>

      <div className="mb-10">
        <AffiliateNote />
      </div>

      {review.sections.map((section) => (
        <section key={section.heading} className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </section>
      ))}

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Specifications</h2>
        <dl className="border border-slate-200 rounded-2xl overflow-hidden">
          {review.specs.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 px-5 py-3 ${
                i % 2 ? 'bg-white' : 'bg-slate-50'
              }`}
            >
              <dt className="text-sm font-semibold text-slate-900 sm:w-44 shrink-0">{s.label}</dt>
              <dd className="text-sm text-slate-700">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
          <h2 className="font-bold text-emerald-900 mb-3">What is good</h2>
          <ul className="space-y-2">
            {review.pros.map((p) => (
              <li key={p} className="text-sm text-emerald-900 flex gap-2">
                <span aria-hidden>·</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
          <h2 className="font-bold text-rose-900 mb-3">What is not</h2>
          <ul className="space-y-2">
            {review.cons.map((c) => (
              <li key={c} className="text-sm text-rose-900 flex gap-2">
                <span aria-hidden>·</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-bold text-slate-900 mb-2">Buy it if</h2>
          <p className="text-sm text-slate-700">{review.whoIsItFor}</p>
        </div>
        <div>
          <h2 className="font-bold text-slate-900 mb-2">Skip it if</h2>
          <p className="text-sm text-slate-700">{review.whoIsItNotFor}</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
          Sources we used
        </h2>
        <ul className="space-y-2">
          {review.sources.map((s) => (
            <li key={s.uri}>
              <a
                href={s.uri}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-sm text-indigo-600 hover:underline break-words"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-slate-200 pt-10 text-center">
        <a
          href={link}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition"
        >
          Check current price on Amazon
        </a>
        <p className="text-xs text-slate-500 mt-4 max-w-md mx-auto">
          Affiliate link. It costs you nothing extra and does not influence our verdict.
        </p>
      </div>
    </article>
  );
};
