import type { JSX } from "react";
import ProfileDropdown from "./profileDropdown";

export default function ProfilePage(): JSX.Element {

    return (
        <div className="min-h-screen bg-[#0f1824] text-white">
            <div className="flex justify-end py-3 px-5">
                <ProfileDropdown />
            </div>

            <div className="top-section mt-12 px-5">
                <div className="text-3xl">Account settings</div>
                <div className="opacity-70 mt-2">Manage your user account settings here.</div>
            </div>

            <div className="user-info mt-5 flex justify-center py-3">
                <div className="w-3xl flex flex-col justify-center">
                    <div className="profile-image flex flex-col gap-3 items-center py-3">
                        <img className="w-25 h-25 rounded-full" src="./../../public/profileIcon/profile_image.jpg" alt="profile_image" />
                        <button className="bg-blue-500 px-4 py-1 rounded-md">Save changes</button>
                    </div>

                    <div className="mt-3">
                        <div className="mb-2">Full Name</div>
                        <input
                            type="tel"
                            placeholder="Enter your name"
                            value={"Ashok Gorana"}
                            // onChange={handleNameChange}
                            className="w-full p-3 bg-gray-800 border rounded-lg mb-4 outline-none focus:ring focus:ring-blue-300"
                        />

                        <div className="mb-2">Email address</div>
                        <input
                            type="tel"
                            placeholder="Enter your email"
                            value={"ashokgorana9001@gmail.com"}
                            // onChange={handleNameChange}
                            className="w-full p-3 bg-gray-800 border rounded-lg mb-4 outline-none focus:ring focus:ring-blue-300"
                        />

                        <button className="bg-blue-500 px-4 py-1 rounded-md">Update details</button>
                    </div>

                    <hr className="flex-grow border-gray-300 mt-8 opacity-50" />

                    <div className="password-section">
                        <div className="top-section mt-12">
                            <div className="text-lg">Update password</div>
                            <div className="opacity-70 text-sm mt-2">Change the settings below carefully and only if required.</div>
                        </div>

                        <div className="mt-5 flex gap-4">
                            <div className="w-full">
                                <div className="mb-2">New password</div>
                                <input
                                    type="tel"
                                    placeholder=""
                                    // value={name}
                                    // onChange={handleNameChange}
                                    className="w-full p-3 bg-gray-800 border rounded-lg mb-4 outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>

                            <div className="w-full">
                                <div className="mb-2">Confirm New password</div>
                                <input
                                    type="tel"
                                    placeholder=""
                                    // value={name}
                                    // onChange={handleNameChange}
                                    className="w-full p-3 bg-gray-800 border rounded-lg mb-4 outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                        </div>

                        <button className="bg-blue-500 px-4 py-1 rounded-md">Update password</button>
                    </div>
                </div>
            </div>

            <div className="footer mt-5 bg-[#1d283d] flex justify-center py-5">
                <div className="w-3xl flex flex-col items-center gap-3">
                    <div className="text-sm opacity-80">Build your tech brand with live classes, coding labs, and more.</div>
                    <div className="text-sm opacity-60">Terms of Service / Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}