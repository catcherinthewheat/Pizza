import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={520}
    viewBox="0 0 300 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="134" cy="123" r="123" />
    <rect x="0" y="280" rx="10" ry="10" width="280" height="19" />
    <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="427" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
