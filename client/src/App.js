import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { MdTipsAndUpdates } from "react-icons/md";

const App = () => {
  const [sliderSepalLength, setsliderSepalLength] = useState(0.0);
  const [sliderSepalWidth, setsliderSepalWidth] = useState(0.0);
  const [sliderPetalLength, setsliderPetalLength] = useState(0.0);
  const [sliderPetalWidth, setsliderPetalWidth] = useState(0.0);
  const [showTooltipSepalLength, setShowTooltipSepalLength] = useState(false);
  const [showTooltipSepalWidth, setShowTooltipSepalWidth] = useState(false);
  const [showTooltipPetalLength, setShowTooltipPetalLength] = useState(false);
  const [showTooltipPetalWidth, setShowTooltipPetalWidth] = useState(false);
  const [prediction, setPrediction] = useState("");

  const onSubmitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/predict", {
        sepal_length: sliderSepalLength,
        sepal_width: sliderSepalWidth,
        petal_length: sliderPetalLength,
        petal_width: sliderPetalWidth,
      });
      return setPrediction(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container
      maxW="800px"
      mt={{ base: "8", md: "12" }}
      mb={{ base: "8", md: "12" }}
    >
      <Flex flexDirection="column" alignItems={{ base: "left", md: "center" }}>
        <Heading as="h1" size={{ base: "lg", md: "xl" }}>
          Iris flower species Classification App🌼
        </Heading>
        <Text mt="2">ReactJS with Machine Learning</Text>
      </Flex>

      {/* Form */}
      <Box mt={{ base: "6", md: "8" }}>
        <form onSubmit={(e) => onSubmitFormHandler(e)}>
          <FormControl>
            <FormLabel>
              <Flex gap={2}>
                <Text>Sepal Length (cm):</Text>
                <Text color={"red"}>{sliderSepalLength} cm</Text>
              </Flex>
            </FormLabel>
            <Box p="6" border="2px" rounded="md">
              <Slider
                id="sliderSepalLength"
                defaultValue={0.0}
                min={0.0}
                max={8.0}
                colorScheme="red"
                step={0.01}
                onChange={(v) => setsliderSepalLength(v)}
                onMouseEnter={() => setShowTooltipSepalLength(true)}
                onMouseLeave={() => setShowTooltipSepalLength(false)}
              >
                <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
                  0.00
                </SliderMark>
                <SliderMark value={8} mt="1" ml="-2.5" fontSize="sm">
                  8.00
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  bg="red.500"
                  color="white"
                  placement="top"
                  isOpen={showTooltipSepalLength}
                  label={`${sliderSepalLength} cm`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
            </Box>

            <FormLabel mt="2">
              <Flex gap={2}>
                <Text>Sepal Width (cm):</Text>
                <Text color={"red"}>{sliderSepalWidth} cm</Text>
              </Flex>
            </FormLabel>
            <Box p="6" border="2px" rounded="md">
              <Slider
                id="slider"
                defaultValue={0.0}
                min={0.0}
                max={8.0}
                colorScheme="red"
                step={0.01}
                onChange={(v) => setsliderSepalWidth(v)}
                onMouseEnter={() => setShowTooltipSepalWidth(true)}
                onMouseLeave={() => setShowTooltipSepalWidth(false)}
              >
                <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
                  0.00
                </SliderMark>
                <SliderMark value={8} mt="1" ml="-2.5" fontSize="sm">
                  8.00
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  bg="red.500"
                  color="white"
                  placement="top"
                  isOpen={showTooltipSepalWidth}
                  label={`${sliderSepalWidth} cm`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
            </Box>

            <FormLabel mt="2">
              <Flex gap={2}>
                <Text>Petal Length (cm):</Text>
                <Text color={"red"}>{sliderPetalLength} cm</Text>
              </Flex>
            </FormLabel>
            <Box p="6" border="2px" rounded="md">
              <Slider
                id="slider"
                defaultValue={0.0}
                min={0.0}
                max={8.0}
                colorScheme="red"
                step={0.01}
                onChange={(v) => setsliderPetalLength(v)}
                onMouseEnter={() => setShowTooltipPetalLength(true)}
                onMouseLeave={() => setShowTooltipPetalLength(false)}
              >
                <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
                  0.00
                </SliderMark>
                <SliderMark value={8} mt="1" ml="-2.5" fontSize="sm">
                  8.00
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  bg="red.500"
                  color="white"
                  placement="top"
                  isOpen={showTooltipPetalLength}
                  label={`${sliderPetalLength} cm`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
            </Box>

            <FormLabel mt="2">
              <Flex gap={2}>
                <Text>Petal Width (cm):</Text>
                <Text color={"red"}>{sliderPetalWidth} cm</Text>
              </Flex>
            </FormLabel>
            <Box p="6" border="2px" rounded="md">
              <Slider
                id="slider"
                defaultValue={0.0}
                min={0.0}
                max={8.0}
                colorScheme="red"
                step={0.01}
                onChange={(v) => setsliderPetalWidth(v)}
                onMouseEnter={() => setShowTooltipPetalWidth(true)}
                onMouseLeave={() => setShowTooltipPetalWidth(false)}
              >
                <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
                  0.00
                </SliderMark>
                <SliderMark value={8} mt="1" ml="-2.5" fontSize="sm">
                  8.00
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  bg="red.500"
                  color="white"
                  placement="top"
                  isOpen={showTooltipPetalWidth}
                  label={`${sliderPetalWidth} cm`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
            </Box>

            <Button
              leftIcon={<MdTipsAndUpdates />}
              colorScheme="red"
              variant="solid"
              mt="3"
              type="submit"
            >
              Click Here to Classify
            </Button>
          </FormControl>
        </form>
      </Box>

      <Heading as="h2" mt="8">
        Result:{" "}
      </Heading>
      <Box
        p="6"
        mt="2"
        bg={prediction.length === 0 ? "grey" : "red.500"}
        color="white"
        rounded="md"
      >
        <Text>The Flower Species is:</Text>
        <Heading>{prediction.length === 0 ? "No Result" : prediction}</Heading>
      </Box>
    </Container>
  );
};

export default App;
