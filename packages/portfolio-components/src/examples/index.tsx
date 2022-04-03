import React, { FC, HTMLAttributes, ReactChild } from "react";
import { Card, Flexbox, Navbar, Tab } from "../Components";
import {
  IoFolderOpenOutline,
  // IoHomeOutline,
  // IoTerminalOutline,
  // IoBrowsersOutline,
} from "react-icons/io5";

import {
  // HiOutlineHome,
  HiOutlineTerminal,
  HiOutlineArchive,
  HiOutlineDocument,
} from "react-icons/hi";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing: FC<Props> = () => {
  return (
    <>
      <Navbar
        items={[
          {
            label: "Curriculum",
            Icon: HiOutlineDocument,
            onClick: (ev: any) => {
              console.log(ev);
            },
          },
          {
            label: "Proyectos",
            Icon: HiOutlineTerminal,
            onClick: (ev: any) => {
              console.log(ev);
            },
          },
          {
            label: "Blog",
            Icon: HiOutlineArchive,
            onClick: (ev: any) => {
              console.log(ev);
            },
          },
          {
            label: "Folders",
            Icon: IoFolderOpenOutline,
            onClick: (ev: any) => {
              console.log(ev);
            },
          },
          {
            label: "Proyectos",
            Icon: HiOutlineTerminal,
            onClick: (ev: any) => {
              console.log(ev);
            },
          },
        ]}
      />
      <Flexbox gap={5} style={{ padding: "2rem" }} justifyContent="flex-start">
        <Card style={{ minWidth: "20rem", minHeight: "30rem" }}>ddddd</Card>
        <Card style={{ padding: 0, width: "50%" }}>
          <Tab
            bordered
            items={[
              {
                label: "Inicio",
                onClick: (ev: any) => {
                  console.log(ev);
                },
              },
              {
                label: "Proyectos",
                onClick: (ev: any) => {
                  console.log(ev);
                },
              },
              {
                label: "Blog",
                onClick: (ev: any) => {
                  console.log(ev);
                },
              },
              {
                label: "Folders",
                onClick: (ev: any) => {
                  console.log(ev);
                },
              },
            ]}
          />
        </Card>
        <Card style={{ minWidth: "20rem", minHeight: "30rem" }}>ddddd</Card>
      </Flexbox>
    </>
  );
};
