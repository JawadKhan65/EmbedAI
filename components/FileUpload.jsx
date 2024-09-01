
import React, { useState, useRef, useEffect } from 'react';
import { Box, Text, VStack, useToast, Button, Progress, Grid, GridItem, Heading } from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';

const allowedFileTypes = ['application/pdf', 'text/csv', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

const FileUpload = ({ props }) => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [trainingData, setTrainingData] = useState([]);
    const toast = useToast();
    const fileInputRef = useRef(null);

    const handleTrainClick = async () => {
        console.log('Train clicked: It should hit an API that sends user"s id');
    };
    //  move to context

    const fetchTrainingData = async () => {
        try {
            const response = await fetch(`/api/dashboard/data?userid=${props.id}&chatbot_id=${props.chatbots[0]?._id}`);
            const data = await response.json();

            if (response.ok && data.success) {
                setTrainingData(data.response);
            } else {
                throw new Error('Failed to fetch training data.');
            }
        } catch (error) {
            console.error('Error fetching training data:', error);
        }
    };

    useEffect(() => {
        fetchTrainingData();
    }, []);

    const handleUpload = async () => {
        if (!file) {
            toast({
                title: 'No file selected.',
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            });
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('filename', file.name);

        try {
            const response = await fetch('/api/dashboard/training', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            if (response.ok) {
                toast({
                    title: 'Upload successful.',
                    description: `File available at ${data.url}`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right',
                });

                const storeSource = {
                    userid: props.id,
                    chatbot_id: props.chatbots[0]._id,
                    source_url: data.url,
                    file_name: file.name,
                    isTrained: false,
                };

                await fetch('/api/dashboard/data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(storeSource),
                });

                setFile(null); // Clear the selected file after successful upload
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            toast({
                title: 'Upload failed.',
                description: error.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setUploading(false);
        }
    };

    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (allowedFileTypes.includes(selectedFile.type)) {
                setFile(selectedFile);
                toast({
                    title: 'File selected.',
                    description: `${selectedFile.name} (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)`,
                    status: 'info',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right',
                });
            } else {
                toast({
                    title: 'Invalid file type.',
                    description: 'Please select a PDF, CSV, DOCX, or XLSX file.',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right',
                });
                setFile(null);
            }
        }
    };

    const handleFileInputClick = () => {
        fileInputRef.current.click();
    };

    return (
        <VStack padding={10} spacing={4} align="stretch" maxW="large">
            <Box
                borderWidth="2px"
                borderRadius="md"
                borderColor="gray.300"
                p={4}
                m={4}
                spacing={4}
                align="center"
                bg="white"
                cursor="pointer"
                w="full"
            >
                <input
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    type="file"
                    accept={allowedFileTypes.join(',')}
                    onChange={handleFileInputChange}
                />
                <Button
                    onClick={handleFileInputClick}
                    bg="#64edd9"
                    color="black"
                    _hover={{ bg: '#64ede5' }}
                    rightIcon={<FaUpload />}
                    w="full"
                >
                    Select File
                </Button>
                <Button
                    onClick={handleUpload}
                    isLoading={uploading}
                    bg="#64ede5"
                    _hover={{ bg: '#64edd9' }}
                    isDisabled={!file}
                    w="full"
                    mt={2}
                >
                    Upload
                </Button>
                {uploading && <Progress colorScheme="green" size="xs" isIndeterminate mt={2} />}
            </Box>

            {file && (
                <Box borderWidth="1px" borderRadius="sm" borderColor="gray.300" p={4} bg="white">
                    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                        <GridItem bg="#64ede5" p={4} borderRadius="md" colSpan={1}>
                            <Text fontWeight="bold">File Name:</Text>
                            <Text>{file.name}</Text>
                        </GridItem>
                        <GridItem bg="#64edd9" p={4} borderRadius="md" colSpan={1}>
                            <Text fontWeight="bold">File Size:</Text>
                            <Text>{`${(file.size / 1024 / 1024).toFixed(2)} MB`}</Text>
                        </GridItem>
                    </Grid>
                </Box>
            )}

            <Text color="gray.500" fontSize="sm">
                Supported file types: PDF, CSV, DOCX, XLSX
            </Text>
            <Text color="gray.500" fontSize="sm" mt={1}>
                Max file size: 30 MB
            </Text>

            <Box>
                <Heading size="md" color="gray.500" mt={4}>
                    Your Training Data
                </Heading>

                <Box mt={2} borderWidth="2px" borderRadius="md" borderColor="gray.300" p={4} bg="white">
                    {trainingData.length > 0 ? (
                        trainingData.map((data, index) => (
                            <Grid mt={2} key={index} templateColumns="repeat(2, 1fr)" gap={4} mb={2}>
                                <GridItem bg="#64eddf" p={4} borderRadius="md" colSpan={1}>
                                    <Text fontWeight="bold">File:</Text>
                                    <Text>{data.file_name}</Text>
                                </GridItem>
                                <GridItem bg="#64eed9" p={4} borderRadius="md" colSpan={1}>
                                    <Button
                                        isTruncated={true}
                                        onClick={handleTrainClick}
                                        width="full"
                                        bg={data.isTrained ? 'green.400' : 'cadetblue'}
                                        color="snow"
                                        _hover={{ bg: data.isTrained ? 'green.600' : '#46797a' }}
                                        _active={{ bg: data.isTrained ? 'green.600' : '#46797a' }}
                                        isDisabled={data.isTrained}
                                    >
                                        {data.isTrained ? 'Trained' : 'Train'}
                                    </Button>
                                </GridItem>
                            </Grid>
                        ))
                    ) : (
                        <Text color="gray.500" fontSize="sm">
                            No training data available.
                        </Text>
                    )}
                </Box>
            </Box>
        </VStack>
    );
};

export default FileUpload;
