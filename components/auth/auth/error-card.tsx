import { LuAlertTriangle } from "react-icons/lu";

import { CardWrapper } from "@/components/auth/auth/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
      <LuAlertTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
