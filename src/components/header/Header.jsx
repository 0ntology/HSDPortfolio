import React from 'react';

import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import Fonts from 'constants/Fonts.js';
import { SmallScreen } from 'constants/UI.js';

import Bar from 'components/common/structural/Bar.jsx';
import LogoButton from 'components/common/graphics/LogoButton.jsx';

import Menu from 'components/header/Menu.jsx';
import CollapsibleMenu from 'components/header/CollapsibleMenu.jsx';

class NarrowHeader extends React.Component {
  state = {
    expanded: false
  };

  handleExpand = (doExpand) => {
    this.setState({
      expanded: doExpand
    });
  };

  render() {
    const {config, current} = this.props;
    const {expanded} = this.state;

    return (
      <Bar customStyles={styles.base}>
        { !expanded && <LogoButton /> }
        <CollapsibleMenu
          config={config}
          current={current}
          expanded={expanded}
          onExpand={this.handleExpand}
        />
      </Bar>
    );
  }
}

const WideHeader = ({config, current}) =>
  <Bar customStyles={styles.base}>
    <LogoButton />
    <Menu config={config} current={current} />
  </Bar>;

const Header = ({dimensions, ...rest}) => (dimensions.width < SmallScreen.width)
    ? <NarrowHeader {...rest} />
    : <WideHeader {...rest} />;

export default Dimensioned(Header);

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '8px',
    fontFamily: Fonts.body,
  },
  icon: {
    height: '100%',
    width: '100%',
    stroke: 'black'
  }
};
