import { styled, Typography } from "@mui/material";
import { FC } from "react";

export interface IFieldTitleProps {
  isRequired?: boolean,
  label: string,
  className?: string,
  sx?: {
    color?: string,
    fontSize?: string,
    marginBottom?: string,
  },
}

export const FieldTitle: FC<IFieldTitleProps> = ({
  isRequired,
  label,
  sx,
  className,
}) => (
  <TitleWrapper sx={sx} className={className}>
    {`${label} ${isRequired ? "*" : ""}`}
  </TitleWrapper>
);

const TitleWrapper = styled(Typography, {
  shouldForwardProp: prop => prop !== "sx",
})<Pick<IFieldTitleProps, "sx">>(({ sx }) => sx as any);
