/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://contentdb_owner:jtiqF4d8GIcp@ep-lucky-sky-a5yc23p4.us-east-2.aws.neon.tech/contentdb?sslmode=require',

    }
  };
  
