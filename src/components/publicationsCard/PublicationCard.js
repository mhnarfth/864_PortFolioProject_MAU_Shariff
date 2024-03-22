import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="publication-card-div"
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.highlight }}
        >
          <div className="publication-name-div">
            <p className="publication-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p
            className="publication-creation-date publication-details"
            style={{ color: theme.secondaryText }}
          >
            Published on {repo.createdAt}
          </p>
          <p className="publication-abstract" style={{ color: theme.text }}>
            <b>Published in : </b>
            {repo.publishedIn}
          </p>
          <p className="publication-abstract" style={{ color: theme.text }}>
            <b>Publisher : </b>
            {repo.publisher}
          </p>
          <p
            className="publication-name-div publication-name"
            style={{ color: theme.text }}
          >
            Abstract
          </p>
          <p className="publication-abstract" style={{ color: theme.text }}>
            {repo.abstract}
          </p>
          {}
        </div>
      </Fade>
    </div>
  );
}
