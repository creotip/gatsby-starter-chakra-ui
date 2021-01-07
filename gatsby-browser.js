import React from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import customTheme from "./theme/theme"
export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  )
}