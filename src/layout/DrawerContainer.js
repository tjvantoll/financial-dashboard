import React from "react";
import { withRouter } from "react-router-dom";

import { Button } from "@progress/kendo-react-buttons";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";

const user = {
  initials: "TV",
  name: "TJ VanToll",
  img: "https://pbs.twimg.com/profile_images/1029805644310827008/wkAPO_XC_400x400.jpg"
};

const items = [
  { text: "Tech Fund", icon: "k-i-globe", route: "/" },
  { text: "Health Fund", icon: "k-i-heart", route: "/" },
  { text: "Commercial Fund", icon: 'k-i-cart', route: '/' },
  { text: "Industrial Fund", icon: 'k-i-gear', route: '/' },
  { text: "Financial Fund", icon: 'k-i-dollar', route: '/' },
];

class DrawerContainer extends React.Component {
  state = {
    expanded: false,
    selectedId: items.findIndex(x => x.selected === true)
  }

  handleClick = () => {
    this.setState((e) => ({ expanded: !e.expanded }));
  }

  closeDrawer = () => {
    this.setState({ expanded: false });
  }

  onSelect = (e) => {
    this.setState({ selectedId: e.itemIndex });
    this.setState({ expanded: false });
    this.props.history.push(e.itemTarget.props.route);
  }

  setSelectedItem = (pathName) => {
    let currentPath = items.find(item => item.route === pathName);
    if (currentPath.text) {
      return currentPath.text;
    }
  }

  render() {
    let selected = this.setSelectedItem(this.props.location.pathname);
    return (
      <div>
        <Drawer
          expanded={this.state.expanded}
          items={items.map(
            (item) => ({ ...item, selected: item.text === selected }))}
          onSelect={this.onSelect}
          animation={{ duration: 400 }}
          position="start"
          onOverlayClick={this.closeDrawer}
        >
          <DrawerContent>
            <div className="header">
              <h1>
                <span>
                  <Button icon="menu" look="flat" onClick={this.handleClick} />
                  <span className="title">
                    ACME Stocks
                    <span className="divider">|</span>
                    <span className="fund">Tech Fund</span>
                  </span>
                </span>
                <img alt={user.name} src={user.img} />
              </h1>
            </div>
            {this.props.children}
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
};

export default withRouter(DrawerContainer);
