import React, { FunctionComponent } from "react";

const Blog: FunctionComponent = () => {
  return (
    <div>
      <div>
        <p>
          <strong>
            <span>EFFECTIVE LEARNING</span>
          </strong>
        </p>
        <p>Become an effective learner in 5 easy steps</p>
      </div>
      <div>
        <p>
          Every student's success is directly related to the student's ability
          to recall items from memory. You can improve your learning and
          retentive skills by practicing these easy steps:
        </p>
        <ul>
          <li>
            Continuous learning: The human brain is like an elastic band,
            learning stretches the brain and improves the brain's capacity to
            store and process more data.{" "}
          </li>
          <li>
            Try Something Different: Don't be addicted to one process of
            learning, try different approaches: Learn from podcasts, watching
            videos, reading books, acting out the words, relating whatever you
            struggle to remember with real-life objects that you love.
          </li>
          <li>
            Teach: Teaching is like a two edged-sword, it benefits both parties.
            One of the best ways to master a new topic or skill is to teach it.
            If there is no audience, stand in front of a mirror and re-teach
            yourself.
          </li>
          <li>
            Visualize It: Create visual impressions of the object you are
            struggling to remember.
          </li>
          <li>
            Focus: How do you eat an Elephant? a bite at a time. Multitasking is
            a big lie, our brain can focus effectively on one task at a time.
            Focus and don't multitask while learning.
          </li>
          <li>
            Whatever works for you: Find a learning formula that works for you
            and do more of it.
          </li>
        </ul>
        <span>
          "Learn continually - there's always one more thing to learn!" -
          <strong>
            <span>Steve Jobs </span>
          </strong>{" "}
        </span>
        <br />
        <img
          src="http://cdn.mcauto-images-production.sendgrid.net/c2ea52e7539cefeb/da4f7d87-8b29-4cd9-bc59-6548425fcf06/1920x1534.jpeg"
          width="150"
          alt="steve-jobs-photo"
        />
        <br />
      </div>
    </div>
  );
};

export default Blog;
