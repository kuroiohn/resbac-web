import "./ManagePoints.css";
import placeholderimg from "../../assets/placeholderimg.png";
import homeIcon from "../../assets/home-blue.png";
import EditIcon from "../../assets/iconedit.png";

import { useState } from "react";

// Dummy data for initial display
const dummyEvacCenter = [
    {
        id: "1",
        name: "Barangay Tumana Covered Court",
        address: "Tumana, Marikina City",
        contact: "09123456789",
        image: placeholderimg,
    },
    {
        id: "2",
        name: "Pio del Pilar Elementary School",
        address: "Pio del Pilar, Marikina City",
        contact: "09987654321",
        image: placeholderimg,
    }
];

const dummyPickupLocations = [
    {
        id: "3",
        name: "Marikina Sports Center",
        address: "Sumulong Highway, Marikina City",
        contact: "09112233445",
        image: placeholderimg,
    },
    {
        id: "4",
        name: "Marikina Convention Center",
        address: "Marikina City Hall, Marikina City",
        contact: "09665544332",
        image: placeholderimg,
    }
];

const dummyEmergencyPersons = [
    {
        id: "5",
        name: "Maria Dela Cruz",
        role: "Disaster Response",
        contact: "09171234567",
        image: placeholderimg,
    },
    {
        id: "6",
        name: "Juanito Luna",
        role: "Search and Rescue",
        contact: "09209876543",
        image: placeholderimg,
    }
];


export default function ManagePoints() {
    // State is now initialized directly with the dummy data
    const [evacCenters, setEvacCenters] = useState(dummyEvacCenter);
    const [pickupLocations, setPickupLocations] = useState(dummyPickupLocations);
    const [emergencyPersons, setEmergencyPersons] = useState(dummyEmergencyPersons);

    // The isLoading state and related JSX have been removed.
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [currentType, setCurrentType] = useState(null);
    const [formState, setFormState] = useState({
        name: "",
        address: "",
        role: "",
        contact: "",
        image: null,
    });
    const [imagePreview, setImagePreview] = useState(null);

    const handleAddEdit = (item, type) => {
        setCurrentItem(item);
        setCurrentType(type);
        if (item) {
            setFormState(item);
            setImagePreview(item.image);
        } else {
            setFormState({
                name: '',
                address: '',
                role: '',
                contact: '',
                image: null,
            });
            setImagePreview(null);
        }
        setIsModalOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormState(prev => ({ ...prev, image: file }));
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSave = (e) => {
        e.preventDefault();

        const newEntry = {
            ...formState,
            id: currentItem ? currentItem.id : Date.now().toString(),
            image: imagePreview,
        };

        if (currentType === 'evac') {
            if (currentItem) {
                setEvacCenters(evacCenters.map( c =>
                    c.id === newEntry.id ? newEntry : c
                ));
            } else {
                setEvacCenters([...evacCenters, newEntry]);
            }
        } else if (currentType === 'pickup') {
            if (currentItem) {
                setPickupLocations(pickupLocations.map( c =>
                    c.id === newEntry.id ? newEntry : c
                ));
            } else {
                setPickupLocations([...pickupLocations, newEntry]);
            }
        } else if (currentType === 'emergency') {
            if (currentItem) {
                setEmergencyPersons(emergencyPersons.map( p =>
                    p.id === newEntry.id ? newEntry : p
                ));
            } else {
                setEmergencyPersons([...emergencyPersons, newEntry]);
            }
        }

        setIsModalOpen(false);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const getLabel = (field) => {
        const labels = {
            evac: { name: "Evacuation Center Name", address: "Address" },
            pickup: { name: "Pick-up Location Name", address: "Address" },
            emergency: { name: "Full Name", role: "Role" },
        };
        return labels[currentType] ? labels[currentType][field] : field;
    };

    const getTitle = () => {
        const title = {
            evac: 'Evacuation Center',
            pickup: 'Pick-up Location',
            emergency: 'Emergency Person'
        };
        return currentItem ? `Edit ${title[currentType]}` : `Add New ${title[currentType]}`;
    };

    return (
        <div className="mp-tab">
            <div className="header">
                <h1 className="mp-welcome-text">
                    Welcome, <span className="mp-admin-name">Admin Name</span>
                </h1>
            </div>

            {/* Evacuation Center Section */}
            <div className="mp-container">
                <div className="mp-container-header">
                    <div className="mp-container-header-icon">
                        <img src={homeIcon} alt="Home-Icon" />
                    </div>
                    <h2 className="mp-container-header-title">Evacuation Center</h2>
                    <div className="mp-horizontal-line"></div>
                </div>
                <button
                    className="mp-add-new-button"
                    onClick={() => handleAddEdit(null, 'evac')}
                >
                    + Add New Evacuation Center
                </button>
                <div className="mp-card-row-container">
                    {evacCenters.map((center) => (
                        <div className="mp-calling-card" key={center.id}>
                            <div className="mp-calling-card-left">
                                <div className="mp-card-image-container">
                                    <div className="mp-image-wrapper">
                                        <img src={center.image} alt={center.name} className="mp-card-image" />
                                    </div>
                                </div>
                            </div>
                            <div className="mp-calling-card-right">
                                <div className="mp-card-header">
                                    <h3 className="mp-card-title">{center.name}</h3>
                                    <button
                                        className="mp-edit-button"
                                        onClick={() => handleAddEdit(center, 'evac')}
                                    >
                                        <img src={EditIcon} alt="Edit-Icon" />
                                    </button>
                                </div>
                                <div className="mp-card-details">
                                    <p>Address: {center.address}</p>
                                    <p>Contact: {center.contact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mp-spacer"></div>

            {/* Pick-up Locations Section */}
            <div className="mp-container">
                <div className="mp-container-header">
                    <div className="mp-container-header-icon">
                        <img src={homeIcon} alt="Home-Icon" />
                    </div>
                    <h2 className="mp-container-header-title">Pick-up Locations</h2>
                    <div className="mp-horizontal-line"></div>
                </div>
                <button
                    className="mp-add-new-button"
                    onClick={() => handleAddEdit(null, 'pickup')}
                >
                    + Add New Pick-up Location
                </button>
                <div className="mp-card-row-container">
                    {pickupLocations.map((location) => (
                        <div className="mp-calling-card" key={location.id}>
                            <div className="mp-calling-card-left">
                                <div className="mp-card-image-container">
                                    <div className="mp-image-wrapper">
                                        <img src={location.image} alt={location.name} className="mp-card-image" />
                                    </div>
                                </div>
                            </div>
                            <div className="mp-calling-card-right">
                                <div className="mp-card-header">
                                    <h3 className="mp-card-title">{location.name}</h3>
                                    <button
                                        className="mp-edit-button"
                                        onClick={() => handleAddEdit(location, 'pickup')}
                                    >
                                        <img src={EditIcon} alt="Edit-Icon" />
                                    </button>
                                </div>
                                <div className="mp-card-details">
                                    <p>Address: {location.address}</p>
                                    <p>Contact: {location.contact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mp-spacer"></div>

            {/* Emergency Persons Section */}
            <div className="mp-container">
                <div className="mp-container-header">
                    <div className="mp-container-header-icon">
                        <img src={homeIcon} alt="Home-Icon" />
                    </div>
                    <h2 className="mp-container-header-title">Emergency Persons</h2>
                    <div className="mp-horizontal-line"></div>
                </div>
                <button
                    className="mp-add-new-button"
                    onClick={() => handleAddEdit(null, 'emergency')}
                >
                    + Add New Emergency Person
                </button>
                <div className="mp-card-row-container">
                    {emergencyPersons.map((person) => (
                        <div className="mp-person-card" key={person.id}>
                            <div className="mp-person-card-content">
                                <div className="mp-person-image-container">
                                    <img src={person.image} alt={person.name} className="mp-person-image" />
                                </div>
                                <div className="mp-person-info">
                                    <h3 className="mp-person-name">{person.name}</h3>
                                    <p className="mp-person-role">{person.role}</p>
                                    <p className="mp-person-affiliation">Barangay Tumana</p>
                                </div>
                                <button
                                    className="mp-edit-button"
                                    onClick={() => handleAddEdit(person, 'emergency')}
                                >
                                    <img src={EditIcon} alt="Edit-Icon" />
                                </button>
                            </div>
                            <button className="mp-person-call-button">
                                Call {person.contact}
                            </button>
                            <button className="mp-person-message-button">
                                Click here to Message
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for adding/editing a center */}
            {isModalOpen && (
                <div className="mp-modal-overlay">
                    <div className="mp-modal-content">
                        <div className="mp-modal-header">
                            <h2>{getTitle()}</h2>
                            <button className="mp-modal-close-button" onClick={handleClose}>&times;</button>
                        </div>
                        <form onSubmit={handleSave}>
                            <div className="mp-form-group">
                                <label>{getLabel('name')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            {currentType !== 'emergency' && (
                                <div className="mp-form-group">
                                    <label>{getLabel('address')}</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formState.address}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            )}
                            {currentType === 'emergency' && (
                                <div className="mp-form-group">
                                    <label>{getLabel('role')}</label>
                                    <input
                                        type="text"
                                        name="role"
                                        value={formState.role}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="mp-form-group">
                                <label>Contact Number</label>
                                <input
                                    type="text"
                                    name="contact"
                                    value={formState.contact}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mp-form-group">
                                <label>Upload Photo</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                {imagePreview && (
                                    <img src={imagePreview} alt="Preview" className="mp-image-preview" />
                                )}
                            </div>
                            <div className="mp-form-actions">
                                <button type="submit" className="mp-save-button">Save</button>
                                <button type="button" className="mp-cancel-button" onClick={handleClose}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}