import { Input, Text } from "@chakra-ui/react";
import * as React from "react";

export const AuthInput = (
  register: (name: String, param: any) => any,
  errors: any
) => {
  return (
    <>
      <Input
        {...register}
        type={"text"}
        variant="flushed"
        placeholder="Flushed"
      />
      <Text h="50px" size="s" color={"red.500"}>
        {errors?.login
          ? errors?.login?.message
            ? errors?.login?.message.toString()
            : "Login is required"
          : ""}
      </Text>
    </>
  );
};
