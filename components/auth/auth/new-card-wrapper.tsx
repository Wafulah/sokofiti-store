"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/auth/ui/card";
import { Header } from "@/components/auth/auth/header";
// import { Social } from "@/components/auth/auth/social";
import { BackButton } from "@/components/auth/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  // showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: // showSocial
CardWrapperProps) => {
  return (
    <Card className="lg:h-[55vh] h-[47vh] lg:w-[400px] w-[85vw] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {/* {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )} */}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
