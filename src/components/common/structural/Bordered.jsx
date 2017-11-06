import React, {Component} from 'react';

const Bordered = (Outside, Inside) =>  [
  <Outside customStyles={styles.outside} />,
  <Inside customStyles={styles.inside} />
];

const styles = {
  outside: {

  },
  inside: {

  }
}
