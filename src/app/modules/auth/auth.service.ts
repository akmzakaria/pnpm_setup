import { success } from "zod";
import { User, LoginPayload } from "../../types/index.js";
import { prisma } from "../../../lib/prisma.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../../utils/sendEmail.js";

// const users: User[] = [];

const register = async (payload: User) => {
  // const existingUser = users.find((u) => u.email === payload.email);
  const existingUser = await prisma.newUser.findUnique({
    where: {
      email: payload.email,
    },
  });

  // console.log(payload);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

  // users.push(payload);

  const user = await prisma.newUser.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      otp,
      otpExpiry,
    },
  });

  await sendEmail(payload.email, "Verify Email", `Your OTP code is ${otp}`);

  return user;
};

const verifyEmail = async (payload: { email: string; otp: string }) => {
  const user = await prisma.newUser.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.otp !== payload.otp) {
    throw new Error("Invalid OTP");
  }

  if (user.otpExpiry && user.otpExpiry < new Date()) {
    throw new Error("OTP expired");
  }

  const updatedUser = await prisma.newUser.update({
    where: {
      email: payload.email,
    },

    data: {
      isVerified: true,
      otp: null,
      otpExpiry: null,
    },
  });

  return updatedUser;
};

const login = async (payload: LoginPayload) => {
  // const user = users.find(
  //   (u) => u.email === payload.email && u.password === payload.password,
  // );

  const user = await prisma.newUser.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "Invalid Credentials!",
    };
  }

  return user;
};

const addUser = async () => {
  const result = await prisma.user.create({
    data: {
      name: "Alice3",
      email: "alice3@prisma.io",
      posts: {
        create: {
          title: "Hello World3",
          content: "This is my first post3!",
          published: true,
        },
      },
    },
    include: {
      posts: true,
    },
  });

  return result;
};
const allUsers = async () => {
  const userData = await prisma.user.findMany();
  return userData;
};

export const AuthService = {
  register,
  login,
  allUsers,
  addUser,
  verifyEmail,
};
