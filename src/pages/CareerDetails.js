import React, { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import {
    Grid,
    Divider,
    Box,
    CircularProgress,
    Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField,
    Typography,
    Snackbar,
    Alert
} from "@mui/material";
import "../static/css/pages/_career.scss";
import { useParams } from "react-router-dom";
import jobsData from '../data/jobs_list';
import jobDetails from '../data/job_details';
import Markdown from "react-markdown";
import axios from 'axios';


export default function CareerDetails() {
    const { id } = useParams(); // Get the id from the URL
    const [jobDescription, setJobDescription] = useState("");
    const [jobInfo, setJobInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false); // State to handle dialog open/close
    const [resumeFile, setResumeFile] = useState(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        location: "",
        interest: "",
        personalStatement: "",
        gradDate: "",
        resume: null,
        references: [{ name: '', email: '', relation: '' }],
        peerReviewedPublications: ['']
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false); // Controls the visibility of the toast
    const [snackbarType, setSnackbarType] = useState('success'); // success, error, warning, info
    const [snackMsg, setSnackMsg] = useState('');

    useEffect(() => {

        let jobInfo = jobsData.find((job) => job.id == id);
        setJobInfo(jobInfo);

        const fetchJobDescription = () => {
            // Check if the job description exists in the jobDescriptions object
            const description = jobDetails[id];

            if (description) {
                setJobDescription(description);
            } else {
                setError(true);
            }
        };

        fetchJobDescription();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]); // Get the selected file
    };

    const uploadFile = async (filename) => {
        try {
            // 1. Get pre-signed URL from the backend
            const response = await axios.get('https://tylrk5tecidnqmefbtzft3dbwq0ckfjv.lambda-url.us-east-1.on.aws', {
                params: {
                    filename: filename,
                    filetype: resumeFile.type,
                },
            });

            const uploadUrl = response.data;

            // 2. Upload the file using the pre-signed URL
            await axios.put(uploadUrl, resumeFile, {
                headers: {
                    'Content-Type': resumeFile.type, // File content type
                },
            });

        } catch (error) {
            console.error('File upload error:', error);
            // alert('Failed to upload file.');
        }
    };

    const validate = () => {
        const { fullName, email, location, interest, personalStatement, gradDate, references, peerReviewedPublications } = formData;

        // Helper function to check for empty strings
        const isEmpty = (field) => field.trim() === "";

        // Validate required text fields
        if (isEmpty(fullName)) {
            triggerToast("error", "Full Name cannot be empty.");
            return false;
        }
        if (isEmpty(location)) {
            triggerToast("error", "Location cannot be empty.");
            return false;
        }
        if (isEmpty(interest)) {
            triggerToast("error", "Interest cannot be empty.");
            return false;
        }
        if (isEmpty(personalStatement)) {
            triggerToast("error", "Personal Statement cannot be empty.");
            return false;
        }
        if (isEmpty(gradDate)) {
            triggerToast("error", "Graduation Date cannot be empty.");
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            triggerToast("error", "Invalid email address.");
            return false;
        }

        // Validate references: at least 3 and each must have name, email, relation
        if (references.length < 3) {
            triggerToast("error", "Please provide at least 3 references.");
            return false;
        }

        const hasInvalidReference = references.some((ref) => {
            return isEmpty(ref.name) || isEmpty(ref.email) || isEmpty(ref.relation);
        });

        if (hasInvalidReference) {
            triggerToast("error", "Each reference must include a name, email, and relation.");
            return false;
        }

        // Validate peer reviewed publications: at least 2 non-empty entries
        if (peerReviewedPublications.length < 2 || peerReviewedPublications.some(isEmpty)) {
            triggerToast("error", "Please provide at least 2 peer-reviewed publications.");
            return false;
        }

        if (!resumeFile) {
            triggerToast("error", "Please upload your resume.");
            return false;
          }

        // If all validations pass
        return true;
    };


    const handleSubmit = async () => {

        try {
            if (validate()) {
                setLoading(true);

                let filename = resumeFile.name.split(".")[0].replace(" ", "_") + Date.now() + "." + resumeFile.name.split(".")[1];
                await uploadFile(filename);

                let resumeUrl = `https://smarslab-files.s3.us-east-1.amazonaws.com/JobApplications/${filename}`


                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const rawData = JSON.stringify({
                    "fullName": formData.fullName,
                    "email": formData.email,
                    'jobName' : jobInfo.title,
                    "location": formData.location,
                    "interest": formData.interest,
                    "personalStatement": formData.personalStatement,
                    "gradDate": formData.gradDate,
                    "peerPublications": formData.peerReviewedPublications,
                    "references": formData.references,
                    "resumeLink": resumeUrl
                });

                const requestOptions = {
                    method: "POST",
                    body: rawData,
                    redirect: "follow"
                };

                fetch("https://q5v5yvo3gwkrlw44kxfjowzbhq0gnqqf.lambda-url.us-east-1.on.aws", requestOptions)
                    .then((response) => response.text())
                    .then((result) => {
                        triggerToast("success", "Thank you. We received your application.")
                        setFormData({
                            fullName: "",
                            email: "",
                            location: "",
                            interest: "",
                            personalStatement: "",
                            gradDate: "",
                            resume: null,
                            references: [{ name: '', email: '', relation: '' }],
                            peerReviewedPublications: ['']
                        });
                        setResumeFile(null)
                        setDialogOpen(false);
                    })
                    .catch((error) => {
                        console.error(error);
                        triggerToast("error", "We're kindly encountering technical issues. Kindly try again later.")
                    }).finally(()=>{
                        setLoading(false);
                    });
            }


        } catch (error) {
            console.error(error);
            triggerToast("error", "We're kindly encountering technical issues. Kindly try again later.")
        }

    };
    if (error) {
        return (
            <Box textAlign="center" mt={5}>
                <Typography variant="h6" color="error">
                    Error: Job description not found.
                </Typography>
            </Box>
        );
    }

    const triggerToast = (toastType, toastMessage) => {
        setSnackbarType(toastType);
        setSnackMsg(toastMessage);
        setSnackbarOpen(true); // Open the snackbar
    };

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleReferenceChange = (e, index, field) => {
        const { value } = e.target;
        setFormData((prevState) => {
            const updatedReferences = [...prevState.references];
            updatedReferences[index][field] = value;
            return { ...prevState, references: updatedReferences };
        });
    };

    const addReference = () => {
        setFormData((prevState) => ({
            ...prevState,
            references: [...prevState.references, { name: '', email: '', relation: '' }]
        }));
    };

    const removeReference = (indexToRemove) => {
        setFormData((prevState) => ({
            ...prevState,
            references: prevState.references.filter((_, index) => index !== indexToRemove),
        }));
    };

    const addPublication = () => {
        setFormData((prevState) => ({
            ...prevState,
            peerReviewedPublications: [...prevState.peerReviewedPublications, '']
        }));
    };

    const removePublication = (indexToRemove) => {
        setFormData((prevState) => ({
            ...prevState,
            peerReviewedPublications: prevState.peerReviewedPublications.filter((_, index) => index !== indexToRemove)
        }));
    };

    const handlePublicationChange = (e, index) => {
        const { value } = e.target;
        setFormData((prevState) => {
            const updatedPublications = [...prevState.peerReviewedPublications];
            updatedPublications[index] = value;
            return { ...prevState, peerReviewedPublications: updatedPublications };
        });
    };

    return (
        <Main>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" sx={{ margin: '40px' }} fullWidth>
                <DialogTitle sx={{ fontSize: "18px" }}><strong>Your Application</strong></DialogTitle>

                <DialogContent>
                    <Box mb={2}>
                        <Typography variant="body1" gutterBottom>
                            Full Name
                        </Typography>
                        <TextField
                            placeholder="John Doe"
                            variant="outlined"
                            fullWidth
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </Box>

                    <Box mb={2}>
                        <Typography variant="body1" gutterBottom>
                            Email
                        </Typography>
                        <TextField
                            placeholder="mail@website.com"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Box>

                    <Box mb={2}>
                        <Typography variant="body1" gutterBottom>
                            Location
                        </Typography>
                        <TextField
                            placeholder="city, state, zipcode"
                            variant="outlined"
                            fullWidth
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </Box>

                    <Box mb={2}>
                        <Typography variant="body1" gutterBottom>
                            Why are you interested in this role?
                        </Typography>
                        <TextField
                            placeholder="Describe your interest"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={3}
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                        />
                    </Box>

                    <Box mb={2}>
                        <Typography variant="body1" gutterBottom>
                            Provide your personal statement of background ( relevant research, and programming experiences)
                        </Typography>
                        <TextField
                            placeholder="Your Experience"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={6}
                            name="personalStatement"
                            value={formData.personalStatement}
                            onChange={handleChange}
                        />
                    </Box>

                    <Box mb={2}>
                        <Typography variant="body1" gutterBottom>
                            Graduation Date
                        </Typography>
                        <TextField
                            type="date" // Specifies a date input field
                            variant="outlined"
                            fullWidth
                            name="gradDate"
                            value={formData.gradDate}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true, // Ensures the label stays up when a date is selected
                            }}
                        />
                    </Box>

                    <Box mb={2}>
                        <Typography variant="body1" gutterBottom>
                            Peer Reviewed Publications (2 to 5)
                        </Typography>
                        {formData.peerReviewedPublications.map((publication, index) => (
                            <Box display="flex" alignItems="center" mb={1} key={index}>
                                <TextField
                                    placeholder="Publication Link"
                                    variant="outlined"
                                    name={`publication-${index}`}
                                    value={publication}
                                    onChange={(e) => handlePublicationChange(e, index)}
                                    fullWidth
                                />

                                {/* "+" button for the last publication input and "-" button for all others */}
                                {index === formData.peerReviewedPublications.length - 1 && formData.peerReviewedPublications.length < 5 ? (
                                    <Button onClick={addPublication} sx={{ ml: 2 }}>
                                        +
                                    </Button>
                                ) : (
                                    <Button onClick={() => removePublication(index)} sx={{ ml: 2 }}>
                                        –
                                    </Button>
                                )}
                            </Box>
                        ))}
                    </Box>



                    <Box mb={2}>
                        <Typography variant="body1" gutterBottom>
                            References (3 to 5)
                        </Typography>
                        {formData.references.map((reference, index) => (
                            <Box display="flex" alignItems="center" mb={1} key={index}>
                                <TextField
                                    placeholder="Name"
                                    variant="outlined"
                                    name={`referenceName-${index}`}
                                    value={reference.name}
                                    onChange={(e) => handleReferenceChange(e, index, 'name')}
                                    sx={{ mr: 1 }}
                                    fullWidth
                                />
                                <TextField
                                    placeholder="Email"
                                    variant="outlined"
                                    name={`referenceEmail-${index}`}
                                    value={reference.email}
                                    onChange={(e) => handleReferenceChange(e, index, 'email')}
                                    sx={{ mr: 1 }}
                                    fullWidth
                                />
                                <TextField
                                    placeholder="Relation"
                                    variant="outlined"
                                    name={`referenceRelation-${index}`}
                                    value={reference.relation}
                                    onChange={(e) => handleReferenceChange(e, index, 'relation')}
                                    fullWidth
                                />
                                {/* Show "+" button only for the last row and "–" button for all other rows */}
                                {index === formData.references.length - 1 && formData.references.length < 5 ? (
                                    <Button onClick={addReference} sx={{ ml: 2 }}>
                                        +
                                    </Button>
                                ) : (
                                    <Button onClick={() => removeReference(index)} sx={{ ml: 2 }}>
                                        –
                                    </Button>
                                )}
                            </Box>
                        ))}
                    </Box>

                    <Box mb={2}>
                        <Typography variant="body1" gutterBottom>
                            Upload Resume (Signed & Dated)
                        </Typography>
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            style={{ width: "100%" }}
                        />
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)} color="info">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Submit'}
                    </Button>
                </DialogActions>
            </Dialog>
            <article className="post" id="career-details">
                <Grid
                    container
                    direction='row'
                    columnSpacing={2}
                    rowSpacing={2}
                    alignItems='center'
                    justifyContent='center'>
                    <Grid item xs={12} textAlign='center' sx={{ marginTop: '-25px' }}>
                        <p className='heading'><strong>{jobInfo.title}</strong> </p>
                        <p>Posted at : {jobInfo.postedDate}</p>
                    </Grid>
                    <Button variant='contained' sx={{
                        paddingY: "4px", // Reduce top and bottom padding
                    }} onClick={() => setDialogOpen(true)}>Apply for this job</Button>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Markdown>{jobDescription}</Markdown>
                    </Grid>
                    <Button variant='contained' sx={{
                        paddingY: "4px", // Reduce top and bottom padding
                    }}
                        onClick={() => setDialogOpen(true)}>Apply for this job</Button>
                </Grid>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={4000} // Auto close after 4 seconds
                    onClose={handleSnackClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Position the toast
                >
                    <Alert onClose={handleSnackClose} severity={snackbarType} sx={{ width: '100%' }}>
                        {snackMsg}
                    </Alert>
                </Snackbar>
            </article>
        </Main>
    );
}