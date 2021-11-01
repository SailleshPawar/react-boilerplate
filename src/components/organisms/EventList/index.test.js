import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes";
import React from "react";
import { render } from "enzyme";

import EventList from ".";

describe("Event List", () => {
  const eventDataList = [
    {
      date: "12:12:12 12/12/12",
      title: "StoryBook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "StoryBook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "StoryBook Event",
      type: "Reminder",
    },
  ];
  it("Renders with data", () => {
    const wrapper = render(
      <ThemeProvider theme={baseTheme}>
        <EventList title="Upcoming Events" eventDataList={eventDataList} />
      </ThemeProvider>
    );
    expect(wrapper).toBeDefined();
  });
});
