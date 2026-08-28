import Navbar from "./Navbar";

function Profile() {
    return (
        <div>

            <Navbar />

            <h1>My Profile</h1>

            <p>Name: Nirmal</p>

            <p>Email: nirmal@example.com</p>

            <button>
                Edit Profile
            </button>

        </div>
    );
}

export default Profile;