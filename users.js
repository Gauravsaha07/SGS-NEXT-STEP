import dns from "dns"
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import connectDB from "./server/config/dbConfig.js";
import User from "./server/models/userModel.js";

dotenv.config();


const users = [
    {
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        phone: "9876543201",
        password: "SGS5511",
        userType: "STUDENT",
        qualification: "12th Pass",
        location: "Indore, MP",
        profilePic: "https://i.pravatar.cc/300?img=1"
    },
    {
        name: "Ananya Verma",
        email: "ananya.verma@example.com",
        phone: "9876543202",
        password: "SGS5511",
        userType: "STUDENT",
        qualification: "BCA",
        location: "Bhopal, MP",
        profilePic: "https://i.pravatar.cc/300?img=2"
    },
    {
        name: "Rohan Patel",
        email: "rohan.patel@example.com",
        phone: "9876543203",
        password: "SGS5511",
        userType: "STUDENT",
        qualification: "B.Tech CSE",
        location: "Ujjain, MP",
        profilePic: "https://i.pravatar.cc/300?img=3"
    },
    {
        name: "Sneha Joshi",
        email: "sneha.joshi@example.com",
        phone: "9876543204",
        password: "SGS5511",
        userType: "STUDENT",
        qualification: "B.Com",
        location: "Dewas, MP",
        profilePic: "https://i.pravatar.cc/300?img=4"
    },
    {
        name: "Mohit Singh",
        email: "mohit.singh@example.com",
        phone: "9876543205",
        password: "SGS5511",
        userType: "STUDENT",
        qualification: "Diploma in IT",
        location: "Ratlam, MP",
        profilePic: "https://i.pravatar.cc/300?img=5"
    },
    {
        name: "Priya Mehta",
        email: "priya.mehta@example.com",
        phone: "9876543206",
        password: "SGS5511",
        userType: "STUDENT",
        qualification: "B.Sc Computer Science",
        location: "Indore, MP",
        profilePic: "https://i.pravatar.cc/300?img=6"
    },
    {
        name: "Yash Gupta",
        email: "yash.gupta@example.com",
        phone: "9876543207",
        password: "SGS5511",
        userType: "STUDENT",
        qualification: "MCA",
        location: "Jabalpur, MP",
        profilePic: "https://i.pravatar.cc/300?img=7"
    },
    {
        name: "Isha Kapoor",
        email: "isha.kapoor@example.com",
        phone: "9876543208",
        password: "SGS5511",
        userType: "STUDENT",
        qualification: "BA",
        location: "Gwalior, MP",
        profilePic: "https://i.pravatar.cc/300?img=8"
    },
    {
        name: "Rahul Tiwari",
        email: "rahul.tiwari@example.com",
        phone: "9876543209",
        password: "SGS5511",
        userType: "STUDENT",
        qualification: "MBA",
        location: "Indore, MP",
        profilePic: "https://i.pravatar.cc/300?img=9"
    },
    {
        name: "Neha Kulkarni",
        email: "neha.kulkarni@example.com",
        phone: "9876543210",
        password: "SGS5511",
        userType: "STUDENT",
        qualification: "B.Tech AI & DS",
        location: "Pune, MH",
        profilePic: "https://i.pravatar.cc/300?img=10"
    },
    {
        name: "Dr. Kunal Saxena",
        email: "kunal.saxena@example.com",
        phone: "9876543211",
        password: "SGS5511",
        userType: "COUNSELOR",
        qualification: "PhD Psychology",
        location: "Indore, MP",
        profilePic: "https://i.pravatar.cc/300?img=11"
    },
    {
        name: "Ritika Agrawal",
        email: "ritika.agrawal@example.com",
        phone: "9876543212",
        password: "SGS5511",
        userType: "COUNSELOR",
        qualification: "M.Sc Career Counseling",
        location: "Bhopal, MP",
        profilePic: "https://i.pravatar.cc/300?img=12"
    },
    {
        name: "Aditya Malhotra",
        email: "aditya.malhotra@example.com",
        phone: "9876543213",
        password: "SGS5511",
        userType: "COUNSELOR",
        qualification: "MBA HR",
        location: "Jaipur, RJ",
        profilePic: "https://i.pravatar.cc/300?img=13"
    },
    {
        name: "Admin User",
        email: "admin@nextstep.ai",
        phone: "9876543214",
        password: "SGS5511",
        userType: "ADMIN",
        qualification: "MBA",
        location: "Indore, MP",
        profilePic: "https://i.pravatar.cc/300?img=14"
    },
    {
        name: "Super Admin",
        email: "superadmin@nextstep.ai",
        phone: "9876543215",
        password: "SGS5511",
        userType: "ADMIN",
        qualification: "MCA",
        location: "Indore, MP",
        profilePic: "https://i.pravatar.cc/300?img=15"
    }
];




const seedUsers = async () => {
    try {
        // Connect MongoDB
        connectDB()

        // Optional: Delete existing users
        await User.deleteMany({});
        console.log("🗑️ Existing users removed");

        // Hash passwords
        const hashedUsers = await Promise.all(
            users.map(async (user) => ({
                ...user,
                password: await bcrypt.hash(user.password, 10),
            }))
        )

        // Insert users
        await User.insertMany(hashedUsers);

        console.log(`🎉 ${hashedUsers.length} users inserted successfully`);

        process.exit(0);
    } catch (error) {
        console.error("❌ Seeder Error:", error);
        process.exit(1);
    }
};

seedUsers();
