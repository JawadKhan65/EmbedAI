import React, { useState, useRef, useEffect } from 'react';
import { Box, Text, VStack, useToast, Button, Progress, Grid, GridItem, Heading, Divider, Icon, HStack, Badge } from '@chakra-ui/react';
import { FaUpload, FaRedo } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

const allowedFileTypes = ['application/pdf', 'text/csv', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

// Define tier limits in MB
const tierLimits = {
    Free: 5,
    Basic: 50,
    Pro: 200,
    Enterprise: 512
};

const FileUpload = ({ props }) => {
    const searchParams = useSearchParams();
    const chatbotid = searchParams.get('chatbotid');
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [trainingData, setTrainingData] = useState([]);
    const [userTier, setUserTier] = useState('Free'); // Default tier
    const [totalFileSize, setTotalFileSize] = useState(0); // To track total file size
    const toast = useToast();
    const fileInputRef = useRef(null);
    const [fileSize, setFileSize] = useState(0);

    const handleTrainClick = async () => {
        console.log('Train clicked: It should hit an API that sends user\'s id');
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    useEffect(() => {
        const fetchTrainingData = async () => {
            try {
                const response = await fetch(`/api/dashboard/data?userid=${props.id}&chatbot_id=${chatbotid}`);
                const data = await response.json();

                if (response.ok && data.success) {
                    setTrainingData(data.response);
                    const totalSize = data.response.reduce((sum, item) => sum + parseFloat(item.file_size), 0);
                    setTotalFileSize(totalSize);
                } else {
                    throw new Error('Failed to fetch training data.');
                }
            } catch (error) {
                console.error('Error fetching training data:', error);
            }
        };
        fetchTrainingData();
    }, [chatbotid, props.id]);

    useEffect(() => {
        // Update userTier based on props
        setUserTier(props.subscription.type);
    }, [props.subscription]);

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

        // Check if the total file size exceeds the limit based on the user's tier
        const totalSizeAfterUpload = totalFileSize + parseFloat(fileSize);
        const tierLimit = tierLimits[userTier];

        if (totalSizeAfterUpload > tierLimit) {
            toast({
                title: 'File size limit exceeded.',
                description: `Your tier (${userTier}) allows up to ${tierLimit} MB. Please upgrade your subscription to upload more files.`,
                status: 'error',
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
                    chatbot_id: chatbotid,
                    source_url: data.url,
                    file_name: file.name,
                    file_size: fileSize, // Save the file size to the database
                    isTrained: false,
                };

                await fetch('/api/dashboard/data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(storeSource),
                });

                setTotalFileSize(totalSizeAfterUpload); // Update the total file size
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
                setFileSize((selectedFile.size / 1024 / 1024).toFixed(2));
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
                <Box borderWidth="1px" borderRadius="md" borderColor="gray.300" p={4} bg="white">
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
            <Divider height={8} p={2} ></Divider>

            <Box>
                <HStack>
                    <Heading size="md" color="gray.500" m={4}>
                        Your Training Data
                    </Heading>
                    <Badge cursor={'pointer'} onClick={handleRefresh} borderRadius={'md'} p={2} colorScheme={'teal'}>
                        <HStack>
                            <FaRedo />
                            <Text>
                                Refresh
                            </Text>
                        </HStack>
                    </Badge>
                </HStack>

                {trainingData.length === 0 ? (
                    <Text>No training data available.</Text>
                ) : (
                    trainingData.map((item, index) => (
                        <Box
                            key={index}
                            borderWidth="1px"
                            borderRadius="md"
                            borderColor="gray.300"
                            p={4}
                            mb={4}
                            bg="white"
                        >
                            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                                <GridItem bg="#64ede5" p={4} borderRadius="md">
                                    <Text fontWeight="bold">File Name:</Text>
                                    <Text>{item.file_name}</Text>
                                </GridItem>
                                <GridItem bg="#64edd9" p={4} borderRadius="md">
                                    <Text fontWeight="bold">File Size:</Text>
                                    <Text>{item.file_size} MB</Text>
                                </GridItem>
                            </Grid>
                            <Button isDisabled={item.isTrained} mt={2} onClick={handleTrainClick} bg="#64ede5" _hover={{ bg: '#64edd9' }}>
                                {item.isTrained ? "Trained" : "Train"}
                            </Button>
                        </Box>
                    ))
                )}
            </Box>

            <Box>
            </Box>
        </VStack>
    );
};

export default FileUpload;
