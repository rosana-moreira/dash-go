import { Text, LinkProps, Link as LinkChakra, Icon } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}
export default function NavLink({
  icon,
  children,
  href,
  ...rest
}: NavLinkProps) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <ActiveLink href={href} passHref>
      <LinkChakra display="flex" alignContent="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </LinkChakra>
    </ActiveLink>
  );
}
