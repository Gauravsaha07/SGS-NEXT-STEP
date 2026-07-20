import dns from "dns"
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./server/config/dbConfig.js";
import Category from "./server/models/cetegoryModel.js";

dotenv.config();

const categories = [
    { title: "Engineering & Technology" },
    { title: "Medical & Healthcare" },
    { title: "Business & Management" },
    { title: "Commerce & Finance" },
    { title: "Law & Legal Studies" },
    { title: "Arts, Humanities & Social Sciences" },
    { title: "Design & Creative Arts" },
    { title: "Media, Journalism & Communication" },
    { title: "Computer Science & IT" },
    { title: "Data Science & Artificial Intelligence" },
    { title: "Government & Civil Services" },
    { title: "Defense & Public Safety" },
    { title: "Education & Teaching" },
    { title: "Hospitality & Tourism" },
    { title: "Agriculture & Environmental Science" },
    { title: "Architecture & Planning" },
    { title: "Aviation & Aerospace" },
    { title: "Fashion & Beauty" },
    { title: "Sports & Fitness" },
    { title: "Entrepreneurship & Startups" },
];

const seedCategories = async () => {
    try {
        await connectDB()

        await Category.deleteMany({})
        console.log("🗑️ Existing categories removed");

        await Category.insertMany(categories);

        console.log(`🎉 ${categories.length} categories inserted successfully`);

        process.exit(0);
    } catch (error) {
        console.error("❌ Seeder Error:", error);
        process.exit(1);
    }
};

seedCategories();
