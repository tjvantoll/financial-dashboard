import React from "react";

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

export default function DrawerContainer(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);

  const onSelect = (e) => {
    setSelectedId(e.itemIndex);
    setExpanded(false);
  }
  const closeDrawer = () => {
    setExpanded(false);
  }
  const toggleDrawer = () => {
    setExpanded(currentExpanded => {
      return !currentExpanded;
    });
  }

  return (
    <div>
      <Drawer
        expanded={expanded}
        items={items.map(
          (item) => ({ ...item, selected: items[selectedId].text === item.text }))}
        onSelect={onSelect}
        animation={{ duration: 400 }}
        position="start"
        onOverlayClick={closeDrawer}
      >
        <DrawerContent>
          <div className="header">
            <h1>
              <span>
                <Button icon="menu" look="flat" onClick={toggleDrawer} />
                <span className="title">
                  ACME Stocks
                  <span className="divider">|</span>
                  <span className="fund">Tech Fund</span>
                </span>
              </span>
              <img alt={user.name} src={user.img} />
            </h1>
          </div>
          {props.children}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
