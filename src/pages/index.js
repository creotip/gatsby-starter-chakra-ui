import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Box,
  Button,
  chakra,
  Divider,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'
import Container from '../components/container'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box mb={20}>
      <Box
        as="section"
        pt={{ base: '10rem', md: '12rem' }}
        pb={{ base: '0', md: '5rem' }}
      >
        <Container>
          <Box textAlign="center">
            <chakra.h1
              maxW="680px"
              mx="auto"
              fontSize={{
                base: '2.25rem',
                sm: '3rem',
                lg: '4rem',
              }}
              fontFamily="heading"
              letterSpacing="tight"
              fontWeight="bold"
              mb="16px"
              lineHeight="1.2"
            >
              Gatsby starter <br />
              <Box as="span" color={useColorModeValue('teal.500', 'teal.300')}>
                {' '}
                Chakra UI
              </Box>
            </chakra.h1>

            <Text
              maxW="560px"
              mx="auto"
              opacity={0.7}
              fontSize={{ base: 'lg', lg: 'xl' }}
              mt="6"
            >
              Chakra UI is a simple, modular and accessible component library
              that gives you the building blocks you need to build your React
              applications.
            </Text>

            <Stack
              mt="10"
              spacing="4"
              justify="center"
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                h="4rem"
                px="40px"
                fontSize="1.2rem"
                as="a"
                size="lg"
                colorScheme="teal"
                rightIcon={<FaArrowRight fontSize="0.8em" />}
              >
                Get Started
              </Button>

              <Button
                as="a"
                size="lg"
                h="4rem"
                px="40px"
                fontSize="1.2rem"
                href="https://github.com/creotip/gatsby-starter-chakra-ui"
                target="__blank"
                leftIcon={<DiGithubBadge size="1.5em" />}
              >
                GitHub
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
    <Divider />
  </Layout>
)

export default IndexPage
