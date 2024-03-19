import * as React from "react";
import { PageSection } from "@patternfly/react-core";
import EmptyStatus from "../../components/EmptyStatus";

export interface ISinkProps {
  sampleProp?: string;
}

// eslint-disable-next-line prefer-const
let Sink: React.FunctionComponent<ISinkProps> = () => (
  <PageSection>
    <EmptyStatus
      heading="Empty State (Stub Support Module)"
      message="This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs."
    />
  </PageSection>
);

export { Sink };
