import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react";

import { SidebarBareContent } from "./helpers/StorybookSidebarHelpers";
import AppChrome, { AppChromeProps } from "../components/AppChrome";
import Sidebar from "../components/Sidebar";
import SidebarSection from "../components/SidebarSection";
import SidebarItem from "../components/SidebarItem";
import SidebarItemLabel from "../components/SidebarItemLabel";
import SidebarSubMenu from "../components/SidebarSubMenu";
import SidebarSubMenuItem from "../components/SidebarSubMenuItem";
import HeaderBar from "../components/HeaderBar";
import { padding } from "../../shared/styles/styleUtils";
import { ProductIcons } from "../../icons/dist/product-icons-enum";

export default {
  title: "Page Structure/App Chrome",
  component: AppChrome,
  parameters: { controls: { disable: true } }
} as Meta;

const Template: Story<AppChromeProps> = args => (
  <AppChrome
    sidebar={
      <Sidebar isOpen={true}>
        <SidebarBareContent />
      </Sidebar>
    }
    headerBar={<HeaderBar>Header content goes here</HeaderBar>}
    mainContent={
      <div className={padding("all", "l")}>Main app content goes here</div>
    }
  />
);

export const AppChromeBare = Template.bind({});

export const HeaderBarDefault = args => (
  <HeaderBar>Header content goes here</HeaderBar>
);

export const HeaderBarWithCustomColors = args => (
  <HeaderBar bgColor="#331272">Header content goes here</HeaderBar>
);

export const SidebarDefault = args => (
  <Sidebar isOpen={true}>
    <SidebarBareContent />
  </Sidebar>
);

export const SidebarWithItems = args => (
  <Sidebar isOpen={true}>
    <SidebarSection label="Section header">
      <SidebarItem url="http://google.com" key="one">
        <SidebarItemLabel>Lorem Ipsum</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="two">
        <SidebarItemLabel>Dolor Sit</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="three">
        <SidebarItemLabel>Amet Consecutor</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="four">
        <SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="five">
        <SidebarItemLabel>Praesent Massa</SidebarItemLabel>
      </SidebarItem>
    </SidebarSection>
  </Sidebar>
);

export const SidebarWithItemsWithOnClick = args => (
  <Sidebar isOpen={true}>
    <SidebarSection label="Section header">
      <SidebarItem onClick={action("clicked a nav item")} key="one">
        <SidebarItemLabel>Lorem Ipsum</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem onClick={action("clicked a nav item")} key="two">
        <SidebarItemLabel>Dolor Sit</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem onClick={action("clicked a nav item")} key="three">
        <SidebarItemLabel>Amet Consecutor</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem onClick={action("clicked a nav item")} key="four">
        <SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem onClick={action("clicked a nav item")} key="five">
        <SidebarItemLabel>Praesent Massa</SidebarItemLabel>
      </SidebarItem>
    </SidebarSection>
  </Sidebar>
);

export const SidebarWithItemsActive = args => (
  <Sidebar isOpen={true}>
    <SidebarSection label="Section header">
      <SidebarItem url="http://google.com" isActive={true} key="one">
        <SidebarItemLabel>Lorem Ipsum</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="two">
        <SidebarItemLabel>Dolor Sit</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="three">
        <SidebarItemLabel>Amet Consecutor</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="four">
        <SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="five">
        <SidebarItemLabel>Praesent Massa</SidebarItemLabel>
      </SidebarItem>
    </SidebarSection>
  </Sidebar>
);

export const SidebarWithCustomColors = args => (
  <Sidebar
    isOpen={true}
    bgColor={"#331272"}
    hoverColor={"#7D58FF"}
    activeColor={"#8360FF"}
    {...args}
  >
    <SidebarSection label="Section header">
      <SidebarItem url="http://google.com" isActive={true} key="one">
        <SidebarItemLabel>Lorem Ipsum</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="two">
        <SidebarItemLabel>Dolor Sit</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="three">
        <SidebarItemLabel>Amet Consecutor</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="four">
        <SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>
      </SidebarItem>
      <SidebarItem url="http://google.com" key="five">
        <SidebarItemLabel>Praesent Massa</SidebarItemLabel>
      </SidebarItem>
    </SidebarSection>
  </Sidebar>
);

export const SidebarItemsWithIcons = args => (
  <Sidebar isOpen={true}>
    <SidebarSection label="Section header">
      <SidebarItem url="http://google.com" key="one">
        <SidebarItemLabel icon={ProductIcons.Services}>
          Lorem Ipsum
        </SidebarItemLabel>
      </SidebarItem>
      <SidebarItem
        icon={ProductIcons.Services}
        url="http://google.com"
        key="two"
      >
        <SidebarItemLabel icon={ProductIcons.Services}>
          Dolor Sit
        </SidebarItemLabel>
      </SidebarItem>
      <SidebarItem
        icon={ProductIcons.Services}
        url="http://google.com"
        key="three"
      >
        <SidebarItemLabel icon={ProductIcons.Services}>
          Amet Consecutor
        </SidebarItemLabel>
      </SidebarItem>
      <SidebarItem
        icon={ProductIcons.Services}
        url="http://google.com"
        key="four"
      >
        <SidebarItemLabel icon={ProductIcons.Services}>
          Adipiscing Edit
        </SidebarItemLabel>
      </SidebarItem>
      <SidebarItem
        icon={ProductIcons.Services}
        url="http://google.com"
        key="five"
      >
        <SidebarItemLabel icon={ProductIcons.Services}>
          Praesent Massa
        </SidebarItemLabel>
      </SidebarItem>
    </SidebarSection>
  </Sidebar>
);

export const SidebarWithSubmenus = args => (
  <Sidebar isOpen={true}>
    <SidebarSection label="Section header">
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Lorem ipsum</SidebarItemLabel>}
        key="subOne"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Dolor Sit</SidebarItemLabel>}
        key="subTwo"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Amet Consecutor</SidebarItemLabel>}
        key="subThree"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>}
        key="subFour"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Praesent Massa</SidebarItemLabel>}
        key="subFive"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
    </SidebarSection>
  </Sidebar>
);

export const SidebarSubmenusWithOnClick = args => (
  <Sidebar isOpen={true}>
    <SidebarSection label="Section header">
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Lorem ipsum</SidebarItemLabel>}
        key="subOne"
      >
        <SidebarSubMenuItem
          onClick={action("clicked a nav item")}
          key="subItemOne"
        >
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem
          onClick={action("clicked a nav item")}
          key="subItemTwo"
        >
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Dolor Sit</SidebarItemLabel>}
        key="subTwo"
      >
        <SidebarSubMenuItem
          onClick={action("clicked a nav item")}
          key="subItemOne"
        >
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem
          onClick={action("clicked a nav item")}
          key="subItemTwo"
        >
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Amet Consecutor</SidebarItemLabel>}
        key="subThree"
      >
        <SidebarSubMenuItem
          onClick={action("clicked a nav item")}
          key="subItemOne"
        >
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem
          onClick={action("clicked a nav item")}
          key="subItemTwo"
        >
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>}
        key="subFour"
      >
        <SidebarSubMenuItem
          onClick={action("clicked a nav item")}
          key="subItemOne"
        >
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem
          onClick={action("clicked a nav item")}
          key="subItemTwo"
        >
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Praesent Massa</SidebarItemLabel>}
        key="subFive"
      >
        <SidebarSubMenuItem
          onClick={action("clicked a nav item")}
          key="subItemOne"
        >
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem
          onClick={action("clicked a nav item")}
          key="subItemTwo"
        >
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
    </SidebarSection>
  </Sidebar>
);

export const SidebarSubmenusActive = args => (
  <Sidebar isOpen={true}>
    <SidebarSection label="Section header">
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Lorem ipsum</SidebarItemLabel>}
        isOpen={true}
        key="subOne"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Dolor Sit</SidebarItemLabel>}
        key="subTwo"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Amet Consecutor</SidebarItemLabel>}
        key="subThree"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>}
        key="subFour"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        iconWidth="s"
        label={<SidebarItemLabel>Praesent Massa</SidebarItemLabel>}
        key="subFive"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
    </SidebarSection>
  </Sidebar>
);

export const SidebarWSubmenusWithIcons = args => (
  <Sidebar isOpen={true}>
    <SidebarSection label="Section header">
      <SidebarSubMenu
        label={
          <SidebarItemLabel icon={ProductIcons.Services}>
            Lorem ipsum
          </SidebarItemLabel>
        }
        menuHasIcon={true}
        key="subOne"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        label={
          <SidebarItemLabel icon={ProductIcons.Services}>
            Dolor Sit
          </SidebarItemLabel>
        }
        menuHasIcon={true}
        key="subTwo"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        label={
          <SidebarItemLabel icon={ProductIcons.Services}>
            Amet Consecutor
          </SidebarItemLabel>
        }
        menuHasIcon={true}
        key="subThree"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        label={
          <SidebarItemLabel icon={ProductIcons.Services}>
            Adipiscing Edit
          </SidebarItemLabel>
        }
        menuHasIcon={true}
        key="subFour"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        label={
          <SidebarItemLabel icon={ProductIcons.Services}>
            Praesent Massa
          </SidebarItemLabel>
        }
        menuHasIcon={true}
        key="subFive"
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
    </SidebarSection>
  </Sidebar>
);

export const SidebarWithDisabledItems = args => (
  <Sidebar isOpen={true}>
    <SidebarSection label="Section header">
      <SidebarItem disabled={true} url="http://google.com" key="one">
        <SidebarItemLabel icon={ProductIcons.Services}>
          Disabled Sidebar Item
        </SidebarItemLabel>
      </SidebarItem>
      <SidebarSubMenu
        label={
          <SidebarItemLabel icon={ProductIcons.Services}>
            Disabled Submenu
          </SidebarItemLabel>
        }
        menuHasIcon={true}
        key="subOne"
        disabled={true}
        isOpen={false}
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem url="http://google.com" key="subItemTwo">
          Dolor Sit
        </SidebarSubMenuItem>
      </SidebarSubMenu>
      <SidebarSubMenu
        label={
          <SidebarItemLabel icon={ProductIcons.Services}>
            Dolor Sit
          </SidebarItemLabel>
        }
        menuHasIcon={true}
        key="subTwo"
        isOpen={true}
      >
        <SidebarSubMenuItem url="http://google.com" key="subItemOne">
          Lorem Ipsum
        </SidebarSubMenuItem>
        <SidebarSubMenuItem
          url="http://google.com"
          key="subItemTwo"
          disabled={true}
        >
          Disabled Submenu Item
        </SidebarSubMenuItem>
      </SidebarSubMenu>
    </SidebarSection>
  </Sidebar>
);
