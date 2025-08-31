import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Login = () => {
  const buttonClicked = () => {
    console.log("Button Clicked");
  };

  return (
    <>
      <Button variant={"ghost"} size={"sm"} onClick={buttonClicked}>
        Click me
      </Button>
      <h1> Login Page</h1>
    </>
  );
};

export default Login;
