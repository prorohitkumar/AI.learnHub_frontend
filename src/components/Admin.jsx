import React, { useEffect } from 'react';
import './Admin.css';
import { Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import logo from '../assets/SRlogos-16.png'; // Adjust the path as needed
import aiImage from '../assets/ai.jpg'; // Adjust the path as needed

const Admin = () => {
    useEffect(() => {
        const dropContainer = document.getElementById("dropcontainer");
        const fileInput = document.getElementById("images");

        const handleDragOver = (e) => {
            e.preventDefault();
        };

        const handleDragEnter = () => {
            dropContainer.classList.add("drag-active");
        };

        const handleDragLeave = () => {
            dropContainer.classList.remove("drag-active");
        };

        const handleDrop = (e) => {
            e.preventDefault();
            dropContainer.classList.remove("drag-active");
            fileInput.files = e.dataTransfer.files;
        };

        dropContainer.addEventListener("dragover", handleDragOver);
        dropContainer.addEventListener("dragenter", handleDragEnter);
        dropContainer.addEventListener("dragleave", handleDragLeave);
        dropContainer.addEventListener("drop", handleDrop);

        return () => {
            dropContainer.removeEventListener("dragover", handleDragOver);
            dropContainer.removeEventListener("dragenter", handleDragEnter);
            dropContainer.removeEventListener("dragleave", handleDragLeave);
            dropContainer.removeEventListener("drop", handleDrop);
        };
    }, []);

    return (
        <div className="admin-page">
            <div className="header-container">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="header-text">Bridging the gap between technology and humanity</h1>
            </div>
            <div className="dropdown-container">
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="category-select-label">Select Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        label="Select Category"
                    >
                        <MenuItem value="Awareness">Awareness</MenuItem>
                        <MenuItem value="Application">Application</MenuItem>
                        <MenuItem value="Augmentation">Augmentation</MenuItem>
                        <MenuItem value="Adaptation">Adaptation</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="upload-container">
                <label htmlFor="images" className="drop-container" id="dropcontainer">
                    <span className="drop-title">Drop files here</span>
                    or
                    <input type="file" id="images" accept="image/*" required />
                </label>
            </div>
            <Button variant="contained" className="submit-button" style={{ background: "#293352", marginLeft: "650px", height: "55px", width: "115px", fontSize: "18px", marginBottom: "150px" }}>
                Submit
            </Button>
            <img src={aiImage} alt="AI" className="right-image" />
        </div>
    );
}

export default Admin;
    