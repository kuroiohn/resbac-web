import './Account.css';
import {useEffect, useState} from "react";
import EditIcon from "../../assets/iconedit.png";

export default function Account() {
    //backend staffs
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    // dummy data
    const dummyData = {
        name: "Marlou Avecilla Parro",
        position: "Barangay DRRM Officer",
        contactNumber: "0967 876 2394",
        barangayAffiliation: "Barangay Tumana",
        email: "marlouparro@gmail.com",
        password: "••••••••••",
        username: "marlou_parro_tumana",
        dateJoined: "June 20, 2025"
    };

    // effects [from internet]
    useEffect(() => {
        // simulating a network request delay
        setTimeout(() => {
            setUserData(dummyData);
            setIsLoading(false);
        }, 1500); //1.5sec delay
    }, []);

    // function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // handle edit click
    const handleEditClick = () => {
        setIsEditing(true);
    }

    // const save edit button
    const handleSaveEdit = () => {
        setIsEditing(false);
        console.log("Updated data: ", userData);
    };

    // const cancel edit
    const handleCancelEdit = () => {
        setUserData(dummyData);
        setIsEditing(false);
    }

    //frontend staffs
    return (
        <div className="acc-tab">
            {/* header - admin name to be modified for backend */}
            <div className="header">
                <h1 className="acc-welcome-text">
                    Welcome, <span className="acc-admin-name">Admin Name</span>
                </h1>
            </div>

            {/*account panel*/}
            <div className="account-panel">
                <div className="account-header">
                    <div className="account-title">Administrator Profile Information</div>
                    <div className="acc-edit-container">
                        { isEditing ? (
                            <div className="acc-edit-buttons">
                                <button className="acc-save-button" onClick={handleSaveEdit}>Save</button>
                                <button className="acc-cancel-button" onClick={handleCancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            <span className="acc-edit-icon" onClick={handleEditClick}>
                            <img src={EditIcon} alt="edit icon" className="acc-edit-icon-img"/>
                        </span>
                        )}
                    </div>
                </div>

                {isLoading ? (
                    <div className="acc-loading-message">Loading...</div>
                ) : (
                    <div className="acc-profile-grid">
                        <div className="acc-profile-column">
                            <div className="acc-profile-item">
                                <span className="acc-profile-label">Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleInputChange}
                                    className="acc-profile-input"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="acc-profile-item">
                                <span className="acc-profile-label">Contact Number</span>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    value={userData.contactNumber}
                                    onChange={handleInputChange}
                                    className="acc-profile-input"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="acc-profile-item">
                                <span className="acc-profile-label">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                    className="acc-profile-input"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="acc-profile-item">
                                <span className="acc-profile-label">Username[AdminID]</span>
                                <input
                                    type="text"
                                    name="username"
                                    value={userData.username}
                                    className="acc-profile-input"
                                    disabled={true} // Always disabled
                                />
                            </div>
                        </div>
                        <div className="acc-profile-column">
                            <div className="acc-profile-item">
                                <span className="acc-profile-label">Position/Role</span>
                                <input
                                    type="text"
                                    name="position"
                                    value={userData.position}
                                    onChange={handleInputChange}
                                    className="acc-profile-input"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="acc-profile-item">
                                <span className="acc-profile-label">Barangay Affiliation</span>
                                <input
                                    type="text"
                                    name="barangayAffiliation"
                                    value={userData.barangayAffiliation}
                                    onChange={handleInputChange}
                                    className="acc-profile-input"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="acc-profile-item">
                                <span className="acc-profile-label">Password</span>
                                <input
                                    type="password"
                                    name="password"
                                    value={userData.password}
                                    className="acc-profile-input"
                                    disabled={true} // Always disabled
                                />
                            </div>
                            <div className="acc-profile-item">
                                <span className="acc-profile-label">Date Joined</span>
                                <input
                                    type="text"
                                    name="dateJoined"
                                    value={userData.dateJoined}
                                    className="acc-profile-input"
                                    disabled={true} // Always disabled
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}