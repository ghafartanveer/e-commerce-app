import React, { useEffect, useState, useCallback } from "react";
import { TextInput } from "react-native";
import { InputProps } from "@types";
import { debounce } from "lodash";
import { styles } from "./styles";

const InputField: React.FC<InputProps> = ({ query, setQuery, ...props }) => {
  const [localQuery, setLocalQuery] = useState(query);

  const debouncedSetQuery = useCallback(
    debounce((newQuery: string) => {
      setQuery(newQuery);
    }, 1500),
    [setQuery]
  );

  useEffect(() => {
    debouncedSetQuery(localQuery);

    return () => {
      debouncedSetQuery.cancel();
    };
  }, [localQuery, debouncedSetQuery]);

  return (
    <TextInput
      value={localQuery}
      onChangeText={setLocalQuery}
      style={styles.input}
      {...props}
    />
  );
};

export default InputField;
