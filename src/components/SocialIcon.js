import React from "react";

const SocialIcon = ({ icon, url }) => {
  const Icon = icon;
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <Icon />
    </a>
  );
};

export default SocialIcon;
