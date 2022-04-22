import { Badge } from "@chakra-ui/react";

interface TagProps {
  text: string;
  bgColor?: string;
  textColor?: string;
}

export const Tag = ({
  text,
  bgColor = "#9C89EE",
  textColor = "#fff",
}: TagProps) => {
  return (
    <Badge
      fontSize="11px"
      fontWeight="normal"
      marginRight={1}
      borderRadius={15}
      color={textColor}
      backgroundColor={bgColor}
      padding="5px 10px"
    >
      {text}
    </Badge>
  );
};
