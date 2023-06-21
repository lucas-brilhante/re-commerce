import { Alert, Button } from "antd";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { ErrorAlertProps } from "./types";

export const ErrorAlert = ({ title, description }: ErrorAlertProps) => {
  return (
    <Alert
      message={title || "Error"}
      showIcon
      description={description || "Unknown error"}
      type="error"
      action={
        <Link to={routes.home}>
          <Button size="small" danger>
            Go to Home
          </Button>
        </Link>
      }
    />
  );
};
