import React from "react";

const SocialIcon = ({ icon, url, name }) => {
  const Icon = icon;

  const sendAnalytics = () => {
    if(window.ga) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'Click',
        eventAction: 'Social Icon',
        eventLabel: url
      });
    }
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={url} onClick={sendAnalytics}>
      <>
        <Icon />
        <span className="icon-title">{name}</span>
      </>
    </a>
  );
};

export default SocialIcon;
