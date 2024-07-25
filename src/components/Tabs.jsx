import "./Tabs.css";
import PropTypes from "prop-types";
import * as TabsPrimitive from "@radix-ui/react-tabs";

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  /** Sets a label on the tablist element via aria-label. */
  label: PropTypes.string,
  /** The controlled value of the tab to activate. */
  value: PropTypes.string.isRequired,
  /** Event handler called when the value changes. */
  onValueChange: PropTypes.func.isRequired
};

export default function Tabs(props) {
  return (
    <TabsPrimitive.Root
      className="rootTabs"
      value={props.value}
      onValueChange={props.onValueChange}
    >
      <TabsPrimitive.List aria-label={props.label} className="listTabs">
        {props.tabsList.map((tab) => {
          return (
            <TabsPrimitive.Trigger
              className="triggerTabs"
              key={tab.id}
              value={tab.value}
            >
              {tab.label}
            </TabsPrimitive.Trigger>
          );
        })}
      </TabsPrimitive.List>
      {props.tabsList.map((tab) => {
        return (
          <TabsPrimitive.Content
            className="contentTabs"
            key={tab.id}
            value={tab.value}
          >
            {tab.content}
          </TabsPrimitive.Content>
        );
      })}
    </TabsPrimitive.Root>
  );
}
