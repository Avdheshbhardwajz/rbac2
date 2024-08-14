const checkEnv = () => {
    const requiredEnv = ['PORT', 'MONGO_URI', 'JWT_SECRET'];
    requiredEnv.forEach((envVar) => {
        if (!process.env[envVar]) {
            console.error(`Error: Missing ${envVar} in environment variables.`);
            process.exit(1);
        }
    });
};

export default checkEnv