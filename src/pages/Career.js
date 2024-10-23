import React, { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Box,
    Grid,
    Divider,
    Link
} from "@mui/material";
import jobsData from '../data/jobs_list';
import "../static/css/pages/_career.scss";

export default function Career() {

    const [searchTerm, setSearchTerm] = useState(""); // Search input
    const [filteredJobs, setFilteredJobs] = useState(jobsData); // Filtered jobs
    useEffect(() => {
        let filtered = jobsData;

        if (searchTerm) {
            filtered = filtered.filter((job) =>
                job.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredJobs(filtered);
    }, [searchTerm]);

    return (
        <Main>
            <article className="post" id="jobs">
                <Grid
                    container
                    direction='row'
                    columnSpacing={2}
                    rowSpacing={2}
                    alignItems='center'
                    justifyContent='center'>
                    <Grid item xs={12} sx={{ marginTop: '-25px' }}>
                        <p className='heading'><strong>Browse jobs</strong> </p>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} >
                        <Box display="flex" justifyContent="space-between" mb={3}>
                            <TextField
                                label="Search by Title"
                                variant="standard"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                sx={{
                                    width: "40%",
                                    backgroundColor: "white", // White background
                                    "& .MuiInputLabel-root": {
                                        color: "#9e9e9e", // Lighter placeholder color
                                        fontSize: "0.9rem",
                                        transform: "translate(5px, -5px)", // Move label to the left and top a bit
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "lightgrey", // Light grey border for input
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#1976d2", // Hover effect on input
                                        },
                                    },
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Jobs Table */}
                    <TableContainer component={Paper} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "15px", textTransform: "uppercase", borderBottom: "2px solid lightgrey" }}>
                                        Position
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "15px", textTransform: "uppercase", borderBottom: "2px solid lightgrey" }}>
                                        Posted Date
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredJobs.length > 0 ? (
                                    filteredJobs.map((job, index) => (
                                        <TableRow key={index} sx={{ borderBottom: "1px solid lightgrey", backgroundColor: "transparent" }}>
                                            <TableCell sx={{ borderBottom: "1px solid lightgrey" }}>
                                                <Link href={'/career-details/'+job['id']} sx={{ color: "#1976d2", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                                                    {job.title}
                                                </Link>
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "1px solid lightgrey" }}>
                                                {job.postedDate}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={2} align="center">
                                            No jobs found
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </article>
        </Main>
    );
}