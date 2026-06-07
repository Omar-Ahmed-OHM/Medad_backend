import mongoose from 'mongoose';

const dbconnenction = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.error("MONGO_URI is undefined! Check Vercel Settings.");
            return;
        }
        
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000
        });
        
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error('Error connecting to database:', error.message);
    }
}
export default dbconnenction;