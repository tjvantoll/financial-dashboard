import React from "react";

import { Button } from "@progress/kendo-react-buttons";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { DrawerSelectEvent } from "@progress/kendo-react-layout/dist/npm/drawer/interfaces/DrawerSelectEvent";

const user = {
  initials: "TV",
  name: "TJ VanToll",
  img: "https://pbs.twimg.com/profile_images/1029805644310827008/wkAPO_XC_400x400.jpg"
};

const items =[
  { text: "Tech Fund", icon: "k-i-globe", children: null },
  { text: "Health Fund", icon: "k-i-heart", children: null },
  { text: "Commercial Fund", icon: 'k-i-cart', children: null },
  { text: "Industrial Fund", icon: 'k-i-gear', children: null },
  { text: "Financial Fund", icon: 'k-i-dollar', children: null },
];

export default function DrawerContainer(props: React.PropsWithChildren<any>) {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);

  const onSelect = (e: DrawerSelectEvent) => {
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
