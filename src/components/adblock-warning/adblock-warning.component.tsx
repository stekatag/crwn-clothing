import Button from "../button/button.component";

import {
  AdBlockWarningContainer,
  AdBlockWarningText,
} from "./adblock-warning.style";

const AdblockWarning = () => (
  <AdBlockWarningContainer>
    <AdBlockWarningText>
      Please, disable your adblocker to continue
    </AdBlockWarningText>
    <Button onClick={() => window.location.reload()}>Reload</Button>
  </AdBlockWarningContainer>
);

export default AdblockWarning;
