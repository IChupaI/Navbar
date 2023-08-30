import React from 'react';
import { LinkData } from '../../data/data';

type Props = {
  links: LinkData[];
};

const Sections = ({ links }: Props) => {
  return (
    <div className="sections">
      {links.map((link) => (
        <div className="section" key={link.id} style={{ height: '70vh' }} id={link.id}>
          <h2>{link.title}</h2>
          <p>{link.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Sections;


