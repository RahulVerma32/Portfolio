import React from "react";

const highlights = [
  "Built an asynchronous ZIP and CSV export pipeline that handled 100+ documents per day. Concurrent S3 downloads cut export time by 30%, and a task queue kept long-running jobs off the request path.",
  "Used CEL expressions to configure export columns, PostgreSQL JSONB to aggregate export history, and Novu to notify users when exports succeeded or failed.",
  "Built bulk task assignment and cancellation with batch SQL authorization and parallel execution, reducing processing time by 20%.",
  "Delivered user group management with CRUD operations, SQL filtering for active groups, and a trigger-backed audit history.",
  "Led the Novu SDK migration in Temporal workflows and shipped Slack OAuth for organizations and individual users.",
];

export default function Experience() {
  return (
    <section id="experience" className="site-shell work-section experience-section" aria-labelledby="experience-heading" tabIndex={-1}>
      <div className="section-intro">
        <div>
          <p className="eyebrow"><span className="index-mark" /> Experience</p>
          <h2 id="experience-heading">Work <em>experience.</em></h2>
        </div>
      </div>
      <article className="surface experience-card">
        <header>
          <p className="eyebrow">314e Corporation</p>
          <h3>Software Development Intern</h3>
          <p className="experience-meta">
            <time dateTime="2026-01">January 2026</time> – <time dateTime="2026-07">July 2026</time>
            <br />Bengaluru, India · Onsite
          </p>
        </header>
        <ul className="experience-highlights">
          {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </article>
    </section>
  );
}
