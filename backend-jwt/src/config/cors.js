export const corsOptions = {
  origin: [
    "http://localhost:5500",
    "http://localhost:3000",
    "http://localhost:4000",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
