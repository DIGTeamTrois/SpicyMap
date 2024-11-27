import {
  Button,
  Container,
  FormControl,
  Input,
  VStack,
} from "@yamada-ui/react";

export default function LoginView() {
  return (
    <div>
      <Container centerContent w="400px">
        <VStack>
          <form action="http://localhost:8080/login/password" method="post">
            <FormControl
              isRequired
              label="username"
              // isInvalid
              // errorMessage="usernameは必須です"
            >
              <Input
                type="text"
                name="username"
                placeholder="enter your username"
              />
            </FormControl>
            <FormControl
              isRequired
              label="password"
              // isInvalid
              // errorMessage="passwordは必須です"
            >
              <Input
                type="password"
                name="password"
                placeholder="enter your password"
              />
            </FormControl>
            <Button type="submit" colorScheme="primary">
              ログイン
            </Button>
          </form>
        </VStack>
      </Container>
    </div>
  );
}
