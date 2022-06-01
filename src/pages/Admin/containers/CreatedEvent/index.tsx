import React from "react";
import { BaseLayout } from "../../../../components";

interface CreatedEventProps {
  event: any;
}

export const CreatedEvent: React.FC<CreatedEventProps> = ({ event }) => {
  return (
    <BaseLayout>
      <>{event.pin}</>
    </BaseLayout>
  );
};
