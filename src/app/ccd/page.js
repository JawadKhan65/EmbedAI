"use client"
import React, { useState } from "react";
import { Box, Flex, Text, Button, VStack, Input, Select, Textarea } from "@chakra-ui/react";

const CCDGenerator = () => {
    const [showForm, setShowForm] = useState(false); // Controls form visibility
    const [formData, setFormData] = useState({
        format: "JSON", // Default format
        patientName: "",
        dob: "",
        gender: "",
        address: "",
        phone: "",
        problems: [{ name: "", icdCode: "" }],
        procedures: [{ name: "", code: "", date: "" }],
        medications: [{ name: "", rxNorm: "", dosage: "" }],
        author: "",
        organization: "",
    });
    const [output, setOutput] = useState(""); // To store generated CCD output

    const handleInputChange = (e, section, index, field) => {
        if (section) {
            const updatedSection = [...formData[section]];
            updatedSection[index][field] = e.target.value;
            setFormData({ ...formData, [section]: updatedSection });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleAddField = (section) => {
        const emptyField =
            section === "problems"
                ? { name: "", icdCode: "" }
                : section === "procedures"
                    ? { name: "", code: "", date: "" }
                    : { name: "", rxNorm: "", dosage: "" };
        setFormData({ ...formData, [section]: [...formData[section], emptyField] });
    };

    const handleGenerate = async () => {
        // Simulate CCD generation logic (Replace with actual API or logic)
        const generatedOutput = {
            format: formData.format,
            patient: {
                name: formData.patientName,
                dob: formData.dob,
                gender: formData.gender,
                address: formData.address,
                phone: formData.phone,
            },
            problems: formData.problems,
            procedures: formData.procedures,
            medications: formData.medications,
            author: formData.author,
            organization: formData.organization,
        };
        setOutput(
            formData.format === "JSON"
                ? JSON.stringify(generatedOutput, null, 2)
                : "<CCD><GeneratedOutputHere/></CCD>" // Replace with real XML structure
        );
    };

    return (
        <Flex
            direction={{ base: "column", lg: "row" }}
            align="stretch"
            w="100%"
            h="100vh"
            p={4}
            bg="gray.50"
        >
            {/* Left Side (CCD Generator UI) */}
            <VStack
                border="2px"
                borderColor="blue.300"
                borderRadius="xl"
                w={{ base: "90vw", lg: "40%" }}
                mx="auto"
                bg="gray.50"
                p={4}
                spacing={4}
                align="stretch"
            >
                <Box textAlign="center">
                    <Text fontSize="lg" fontWeight="bold">
                        CCD Generator
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        Fill in the fields to generate CCD data
                    </Text>
                </Box>
                {!showForm ? (
                    <Button
                        onClick={() => setShowForm(true)}
                        bg="#64edd9"
                        _hover={{ bg: "#64ede5", color: "black" }}
                        color="black"
                        w="full"
                    >
                        Generate CCD
                    </Button>
                ) : (
                    <Box
                        as="form"
                        border="1px"
                        borderColor="blue.200"
                        borderRadius="md"
                        p={4}
                        bg="white"
                        overflowY="auto"
                        maxH="60vh"
                    >
                        {/* Format Selection */}
                        <Box mb={4}>
                            <Text fontWeight="semibold">Output Format</Text>
                            <Select
                                name="format"
                                value={formData.format}
                                onChange={(e) => handleInputChange(e)}
                                borderColor="blue.300"
                            >
                                <option value="JSON">JSON</option>
                                <option value="XML">XML</option>
                            </Select>
                        </Box>

                        {/* Patient Details */}
                        <Box mb={4}>
                            <Text fontWeight="semibold">Patient Details</Text>
                            <Input
                                placeholder="Name"
                                name="patientName"
                                value={formData.patientName}
                                onChange={(e) => handleInputChange(e)}
                                mb={2}
                                borderColor="blue.300"
                            />
                            <Input
                                placeholder="Date of Birth (YYYY-MM-DD)"
                                name="dob"
                                value={formData.dob}
                                onChange={(e) => handleInputChange(e)}
                                mb={2}
                                borderColor="blue.300"
                            />
                            <Select
                                name="gender"
                                value={formData.gender}
                                onChange={(e) => handleInputChange(e)}
                                mb={2}
                                borderColor="blue.300"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Select>
                            <Input
                                placeholder="Address"
                                name="address"
                                value={formData.address}
                                onChange={(e) => handleInputChange(e)}
                                mb={2}
                                borderColor="blue.300"
                            />
                            <Input
                                placeholder="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => handleInputChange(e)}
                                borderColor="blue.300"
                            />
                        </Box>

                        {/* Problems */}
                        <Box mb={4}>
                            <Text fontWeight="semibold">Problems</Text>
                            {formData.problems.map((problem, index) => (
                                <Flex key={index} gap={2} mb={2}>
                                    <Input
                                        placeholder="Problem Name"
                                        value={problem.name}
                                        onChange={(e) =>
                                            handleInputChange(e, "problems", index, "name")
                                        }
                                        borderColor="blue.300"
                                    />
                                    <Input
                                        placeholder="ICD Code"
                                        value={problem.icdCode}
                                        onChange={(e) =>
                                            handleInputChange(e, "problems", index, "icdCode")
                                        }
                                        borderColor="blue.300"
                                    />
                                </Flex>
                            ))}
                            <Button
                                onClick={() => handleAddField("problems")}
                                size="sm"
                                mt={2}
                                bg="blue.200"
                                color="white"
                            >
                                <span className="text-2xl p-2">+</span> Add Problem
                            </Button>
                        </Box>

                        {/* Procedures */}
                        <Box mb={4}>
                            <Text fontWeight="semibold">Procedures</Text>
                            {formData.procedures.map((procedure, index) => (
                                <Flex key={index} gap={2} mb={2}>
                                    <Input
                                        placeholder="Procedure Name"
                                        value={procedure.name}
                                        onChange={(e) =>
                                            handleInputChange(e, "procedures", index, "name")
                                        }
                                        borderColor="blue.300"
                                    />
                                    <Input
                                        placeholder="Code"
                                        value={procedure.code}
                                        onChange={(e) =>
                                            handleInputChange(e, "procedures", index, "code")
                                        }
                                        borderColor="blue.300"
                                    />
                                    <Input
                                        placeholder="Date"
                                        type="date"
                                        value={procedure.date}
                                        onChange={(e) =>
                                            handleInputChange(e, "procedures", index, "date")
                                        }
                                        borderColor="blue.300"
                                    />
                                </Flex>
                            ))}
                            <Button
                                onClick={() => handleAddField("procedures")}
                                size="sm"
                                mt={2}
                                bg="blue.200"
                                color="white"
                            >
                                <span className="text-2xl p-2">+</span> Add Procedure
                            </Button>
                        </Box>

                        {/* Medications */}
                        <Box mb={4}>
                            <Text fontWeight="semibold">Medications</Text>
                            {formData.medications.map((medication, index) => (
                                <Flex key={index} gap={2} mb={2}>
                                    <Input
                                        placeholder="Medication Name"
                                        value={medication.name}
                                        onChange={(e) =>
                                            handleInputChange(e, "medications", index, "name")
                                        }
                                        borderColor="blue.300"
                                    />
                                    <Input
                                        placeholder="RxNorm Code"
                                        value={medication.rxNorm}
                                        onChange={(e) =>
                                            handleInputChange(e, "medications", index, "rxNorm")
                                        }
                                        borderColor="blue.300"
                                    />
                                    <Input
                                        placeholder="Dosage"
                                        value={medication.dosage}
                                        onChange={(e) =>
                                            handleInputChange(e, "medications", index, "dosage")
                                        }
                                        borderColor="blue.300"
                                    />
                                </Flex>
                            ))}
                            <Button
                                onClick={() => handleAddField("medications")}
                                size="sm"
                                mt={2}
                                bg="blue.200"
                                color="white"
                            >
                                <span className="text-2xl p-2">+</span> Add Medication
                            </Button>
                        </Box>

                        {/* Author & Organization */}
                        <Box mb={4}>
                            <Text fontWeight="semibold">Author & Organization</Text>
                            <Input
                                placeholder="Author Name"
                                name="author"
                                value={formData.author}
                                onChange={(e) => handleInputChange(e)}
                                mb={2}
                                borderColor="blue.300"
                            />
                            <Input
                                placeholder="Organization Name"
                                name="organization"
                                value={formData.organization}
                                onChange={(e) => handleInputChange(e)}
                                borderColor="blue.300"
                            />
                        </Box>

                        <Button
                            onClick={handleGenerate}
                            bg="#64edd9"
                            _hover={{ bg: "#64ede5", color: "black" }}
                            color="black"
                            w="full"
                        >
                            Generate CCD
                        </Button>
                    </Box>
                )}
            </VStack>

            {/* Right Side (Generated Output Display) */}
            {output && (
                <Box
                    flex="1"
                    border="2px"
                    borderColor="blue.300"
                    borderRadius="xl"
                    p={4}
                    bg="gray.50"
                    ml={{ base: 0, lg: 4 }} // Left margin for larger screens
                    w={{ base: "90vw", lg: "50%" }} // Responsive width
                    maxH="80vh" // Maximum height for the output section
                    overflowY="auto"
                >
                    <Text fontWeight="bold" fontSize="lg" mb={4}>
                        Generated CCD Output
                    </Text>
                    <Box
                        bg="white"
                        p={4}
                        borderRadius="md"
                        border="1px"
                        borderColor="blue.200"
                        height="full"
                        overflowY="auto"
                    >
                        <Textarea
                            value={output}
                            readOnly
                            fontFamily="monospace"
                            fontSize="sm"
                            height="full"
                            borderColor="blue.300"
                            resize="none"
                            bg="gray.100"
                        />
                    </Box>
                </Box>
            )}
        </Flex>
    );
};

export default CCDGenerator;
