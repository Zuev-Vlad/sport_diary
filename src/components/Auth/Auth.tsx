
import * as React from "react";
import {
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AppModalModel } from "../../models/AppModalModel/AppModalModel";

const AuthForm = styled.form`
  border: solid 1px #191c24;
  padding: 10px 20px;
  width: 100%;
`;

export const Auth = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const modal = new AppModalModel()

  const onLogin = (data: any) => {
    console.log(data);
    /** TODO
     * Доделать аторизацию
     */
  };


  return (
    <AuthForm onSubmit={handleSubmit(onLogin)}>
      <Heading as="h2" size={"lg"}>
        Авторизация
      </Heading>
      <Text>Для входа в личный кабинет необходимо авторизоваться</Text>

      <FormControl mt={"5"}>
        <Input
          {...register("login", {
            required: true,
          })}
          type={"text"}
          variant="flushed"
          placeholder="Логин для входа"
        />
        <Text h="30px" size="s" color={"red.500"}>
          {errors?.login && "Login is required"}
        </Text>
      </FormControl>

      <FormControl mt={"5"}>
        <Input
          {...register("password", {
            required: true,
          })}
          type={"password"}
          variant="flushed"
          placeholder="Пароль"
        />
        <Text h="30px" size="s" color={"red.500"}>
          {errors?.password && "Password is required"}
        </Text>
      </FormControl>

      <Stack pt={5}>
        <Button colorScheme={"purple"} type="submit">Войти</Button>
        <Button onClick={() => modal.toggleOpen()}>Open Modal</Button>
      </Stack>
    </AuthForm>
  );
};
