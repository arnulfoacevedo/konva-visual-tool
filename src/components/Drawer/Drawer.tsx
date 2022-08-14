import React, { useContext, useEffect } from "react";
import DrawerContext from "../../hooks/DrawerContext";
import DrawerTopic from "./DrawerTopic";
import DrawerNode from "./DrawerNode";
import DrawerPub from "./DrawerPub";
const InfoDrawer: React.FC = () => {
  const { drawerState } = useContext(DrawerContext);

  useEffect(() => {
    console.log(drawerState?.content);
  }, [drawerState]);
  switch (drawerState.type) {
    case "topic":
      return <DrawerTopic />;
    case "node":
      return <DrawerNode />;
    // case "subscriber":
    //   return <DrawerSubscriber />;
    case "publisher":
      return <DrawerPub />;

    //default
    default:
      return <></>;
  }
};
export default InfoDrawer;
