import React from 'react';
import { dataType } from '../../data/data';

type SectionsProps = {
  data: dataType[];
};

const Sections: React.FC<SectionsProps> = ({ data }: SectionsProps) => {
  return (
    <div className="sections">
      {data.map((d) => (
        <div className="section" key={d.id} style={{ height: '70vh' }} id={d.id}>
          <h2>{d.title}</h2>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Sections;
