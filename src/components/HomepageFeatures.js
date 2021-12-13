import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title:  (
      <>
      {
        translate({
          id:"feature1",
          message:"Decentralized"
        })
      }
      </>
    ),
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      {
        translate({
          id:"detail1",
          message:"The Chia network has more full nodes than any other blockchain, and allows anyone to participate in farming from their home, with just a hard drive."
        })
      }
      </>
    ),
  },
  {
    title: (
      <>
      {
        translate({
          id:"feature2",
          message:"Environmentally Friendly"
        })
      }
      </>
    ),
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      {
        translate({
          id:"detail2",
          message:"Proof of Space and Time as a consensus mechanism uses less than 1% of the electricity that Bitcoin uses."
        })
      }
      </>
    ),
  },
  {
    title:  (
      <>
      {
        translate({
          id:"feature3",
          message:"Powerful"
        })
      }
      </>
    ),
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      {
        translate({
          id:"detail3",
          message:"The Chialisp programming language and blockchain environment allows developers to make extremely powerfuland secure decentralized apps, than can never be stopped."
        })
      }
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
