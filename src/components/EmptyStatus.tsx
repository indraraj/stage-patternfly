import { CubesIcon } from "@patternfly/react-icons";
import {
  Button,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateHeader,
  EmptyStateIcon,
  EmptyStateVariant,
  Text,
  TextContent,
  TextVariants,
} from "@patternfly/react-core";
import { FC } from "react";

interface EmptyStatusProps {
  heading: string;
  message: string;
  subMessage?: string;
}

const EmptyStatus: FC<EmptyStatusProps> = ({
  heading,
  message,
  subMessage,
}) => {
  return (
    <EmptyState variant={EmptyStateVariant.full}>
      <EmptyStateHeader
        titleText={heading}
        icon={<EmptyStateIcon icon={CubesIcon} />}
        headingLevel="h1"
      />
      <EmptyStateBody>
        <TextContent>
          <Text component="p">{message}</Text>
          {subMessage && (
            <Text component={TextVariants.small}>{subMessage}</Text>
          )}
        </TextContent>
      </EmptyStateBody>
      <EmptyStateFooter>
        <Button variant="primary">Primary Action</Button>
        <EmptyStateActions>
          <Button variant="link">Multiple</Button>
          <Button variant="link">Action Buttons</Button>
          <Button variant="link">Can</Button>
          <Button variant="link">Go here</Button>
          <Button variant="link">In the secondary</Button>
          <Button variant="link">Action area</Button>
        </EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  );
};

export default EmptyStatus;
