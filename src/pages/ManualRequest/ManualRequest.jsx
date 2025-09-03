import ".//ManualRequest.css";
import {useState} from "react";
import resbaclogo from "../../assets/RESBACLogo.png";

export default function ManualRequest() {

    //backend staffs
    // state for form fields
    const [name, setName] = useState("");
    const [contactnumber, setContactnumber] = useState("");
    const [address, setAddress] = useState("");
    const [vulnerability, setVulnerability] = useState("");
    const [householdnumber, setHouseholdnumber] = useState("");

    //state for list of manual request
    const [manualRequest, setManualRequest] = useState([]);

    //state for showing expanded view of the table
    const [showExpandedView, setShowExpandedView] = useState(false);

    // state for confirmation modal
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [requestIdToDelete, setRequestIdToDelete] = useState(null);

    // function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents the page from reloading

        // some basic validation
        if (!name || !contactnumber || !address || !vulnerability || !householdnumber) {
            alert("Please fill in all the fields");
            return;
        }

        const newRequest = {
            id: Date.now(), // Unique ID
            name,
            contactnumber,
            address,
            vulnerability,
            householdnumber,
        };

        setManualRequest([...manualRequest, newRequest]);

        //clear the form
        setName("");
        setContactnumber("");
        setAddress("");
        setVulnerability("");
        setHouseholdnumber("");
    };

    // function to show confirmation modal
    const showConfirmationModal = (id) => {
        setRequestIdToDelete(id);
        setShowConfirmation(true);
    }

    // function to handle the actual removal
    const handleConfirmRemove = () => {
        setManualRequest(manualRequest.filter(request => request.id !== requestIdToDelete));
        setShowConfirmation(false);
        setRequestIdToDelete(null);
    }

    // function to cancel the removal
    const handleCancelRemove = () => {
        setShowConfirmation(false);
        setRequestIdToDelete(null);
    }

    //front-end staffs
    return (
        // the whole tab [mother tab]
        <div className="mr-tab">
            {/* header */}
            <div className="header">
                <h1 className="mr-welcome-text">
                    Welcome, <span className="mr-admin-name">Admin Name</span>
                </h1>
            </div>

            {/* search bar */}
            <div className="search-controls">
                <input type="text" placeholder="Search..." className="search-bar"/>
                <button className="expand-button" onClick={() => setShowExpandedView(true)}>Expand Table</button>
            </div>

            {/* main content: left [manual request fomr] right [manual report table]*/}
            <div className="mr-content-container">
                {/* manual request form */}
                <div className="manual-request-panel">
                    <div className="mr-panel-header">
                        <div className="mr-panel-logo">
                            <img src={resbaclogo} alt="Rescue Logo" className="logo-image"/>
                        </div>
                        <h2 className="mr-panel-title">Manual Rescue Request</h2>
                        <p className="mr-panel-subtitle">Hotline rescue request log here...</p>
                    </div>

                    <form className="mr-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contactnumber">Contact Number</label>
                            <input
                                type="text"
                                id="contactnumber"
                                value={contactnumber}
                                onChange={(e) => setContactnumber(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className={"form-group"}>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className={"form-group"}>
                            <label htmlFor="vulnerability">Vulnerability</label>
                            <input
                                type="text"
                                id="vulnerability"
                                value={vulnerability}
                                onChange={(e) => setVulnerability(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className={"form-group"}>
                            <label htmlFor="householdnumber">Household Number</label>
                            <input
                                type="text"
                                id="householdnumber"
                                value={householdnumber}
                                onChange={(e) => setHouseholdnumber(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <button type="submit" className="submit-button">Submit Request</button>
                    </form>
                </div>

                {/* Right side: Request Table */}
                <div className="request-report-panel">
                    <div className="table-scroll-container">
                        <table className="mr-data-table">
                            <thead style={{ backgroundColor: "#D9DCF2" , color: "black"}}>
                            <tr>
                                <th>Name</th>
                                <th>Contact Number</th>
                                <th>Address</th>
                                <th>Vulnerability</th>
                                <th>Household Size</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {manualRequest.length > 0 ? (
                                manualRequest.map((request, index) => (
                                    <tr key={request.id} className={index % 2 === 0 ? "mrrow-light" : "mrrow-dark"}>
                                        <td>{request.name}</td>
                                        <td>{request.contactnumber}</td>
                                        <td>{request.address}</td>
                                        <td>{request.vulnerability}</td>
                                        <td>{request.householdnumber}</td>
                                        <td>
                                            <button onClick={() => showConfirmationModal(request.id)} className="remove-button">Remove</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>Table Empty</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Expanded View Modal */}
            {showExpandedView && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Expanded Rescue Request Report</h2>
                            <button className="modal-close-button" onClick={() => setShowExpandedView(false)}>
                                &times;
                            </button>
                        </div>
                        <div className="expanded-table-container">
                            <table className="mr-data-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Contact Number</th>
                                    <th>Address</th>
                                    <th>Vulnerability</th>
                                    <th>Household Size</th>
                                </tr>
                                </thead>
                                <tbody>
                                {manualRequest.map((request, index) => (
                                    <tr key={request.id} className={index % 2 === 0 ? "mrrow-light" : "mrrow-dark"}>
                                        <td>{request.name}</td>
                                        <td>{request.contactnumber}</td>
                                        <td>{request.address}</td>
                                        <td>{request.vulnerability}</td>
                                        <td>{request.householdnumber}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* confirmation of removal */}
            {showConfirmation && (
                    <div className="modal-overlay">
                        <div className="confirm-modal-content">
                            <p>Are you sure you want to remove this request?</p>
                            <div className="confirm-modal-buttons">
                                <button onClick={handleCancelRemove} className="cancel-button">Cancel</button>
                                <button onClick={handleConfirmRemove} className="confirm-button">Confirm</button>
                            </div>
                        </div>
                    </div>
            )}
        </div>
    );
}






