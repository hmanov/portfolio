module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "6b5056fa181675cce297cf23b1104e74"),
  },
});
