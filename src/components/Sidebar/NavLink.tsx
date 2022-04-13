import { Text, LinkProps, Link, Icon } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}
export default function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignContent="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
