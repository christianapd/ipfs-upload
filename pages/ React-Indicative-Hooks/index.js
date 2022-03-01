import { Box, Input, Text, Heading } from "@chakra-ui/react";
import React, { useState, useCallback } from "react";
import { useValidate, useValidateAll, useStateValidator } from "react-indicative-hooks";


const rules = {
  name: "required",
  email: "required|email"
};
const messages = {
  "name.required": "Please, fill the name input with some data",
  "email.email": "You need to enter a valid email"
};
export default function SimpleForm (){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const error = useValidate({ name, email }, rules, messages);

  return (
    <Box w="500px" mt="50px" border="2px solid black" p="10px">
      <Heading>SimpleForm</Heading>
      Name
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        data-testid="name"
        className="ml-2 mr-5 mb-5"
      />
      Email
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        data-testid="email"
        className="ml-2 mr-5 mb-5"
      />
      <Text className="text-red" data-testid="error">
        {error && error.message}
      </Text>
    </Box>
  );
}

export const FormWithOptions = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const options = {
    messages,
    onSuccess: () => setShow(false),
    onError: () => setShow(true)
  };
  const error = useValidate({ name, email }, rules, options);
  return (
    <Box w="500px" mt="50px" border="2px solid black" p="10px">
      <Heading>FormWithOptions</Heading>
      <Text className="text-red mb-5" data-testid="alert">
        {show && "Sorry, you have an error"}
      </Text>
      Name
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        data-testid="name"
        className="ml-2 mr-5 mb-5"
      />
      Email
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        data-testid="email"
        className="ml-2 mr-5 mb-5"
      />
      <Text className="text-red" data-testid="error">
        {error && error.message}
      </Text>
    </Box>
  );
}

export const SimpleFormAll = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const errors = useValidateAll({ name, email }, rules, messages);
  return (
    <Box w="500px" mt="50px" border="2px solid black" p="10px">
      <Heading>  SimpleFormAll</Heading>
      Name
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        data-testid="name"
        className="ml-2 mr-5 mb-5"
      />
      Email
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        data-testid="email"
        className="ml-2 mr-5 mb-5"
      />
      <Text className="text-red" data-testid="error">
        {errors && errors.map(error => error.message).join(", ")}
      </Text>
    </Box>
  );
}

export const FormAllWithOptions = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const options = {
    messages,
    onSuccess: useCallback(() => setShow(false), []),
    onError: useCallback(() => setShow(true), [])
  };

  const errors = useValidateAll({ name, email }, rules, options);

  return (
    <Box w="500px" mt="50px" border="2px solid black" p="10px">
      <Heading>FormAllWithOptions</Heading>
      <Text className="text-red mb-5" data-testid="alert">
        {show && "Sorry, you have an error"}
      </Text>
      Name
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        data-testid="name"
        className="ml-2 mr-5 mb-5"
      />
      Email
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        data-testid="email"
        className="ml-2 mr-5 mb-5"
      />
      <Text className="text-red" data-testid="error">
        {errors && errors.map(error => error.message).join(", ")}
      </Text>
    </ Box>
  );
}

const ruless = "required";
const messagess = {
  required: "Please, fill the input with some data"
};
export const SimpleInput = () => {
  const [value, setValue, error] = useStateValidator("", ruless, messagess);
  return (
    <Box w="500px" mt="50px" border="2px solid black" p="10px">
      <Heading>SimpleInput</Heading>
      Value
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        data-testid="input"
        className="ml-2 mr-5 mb-5"
      />
      <Text className="text-red" data-testid="error">
        {error && error.message}
      </Text>
    </Box>
  );
}

export const InputWithOptions = () => {
  const [show, setShow] = useState(false);
  const options = {
    messagess,
    runOnMount: true,
    onSuccess: () => setShow(false),
    onError: () => setShow(true)
  };
  const [value, setValue, error] = useStateValidator("", ruless, options);
  return (
    <Box w="500px" mt="50px" border="2px solid black" p="10px">
      <Heading>InputWithOptions</Heading>
      <Text className="text-red mb-5" data-testid="alert">
        {show && "Sorry, you have an error"}
      </Text>
      Value
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        data-testid="input"
        className="ml-2 mr-5 mb-5"
      />
      <Text className="text-red" data-testid="error">
        {error && error.message}
      </Text>
    </Box>
  );
}