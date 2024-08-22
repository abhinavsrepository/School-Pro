/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:XszL6hbkMA5C@ep-divine-lake-a5p4xj8a.us-east-2.aws.neon.tech/neondb?sslmode=require',

    }
  };
  
