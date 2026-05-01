// import files and modules
import userModel from '../models/user.model.js';
import { HTTP_STATUS, ERROR_MESSAGES } from '../config/constants.js';
import { AppError, asyncHandler } from '../utils/errorHandler.js';
import { generateToken } from '../utils/tokens.js';
import { sendVerificationEmail } from '../utils/email.js';
import { config } from '../config/config.js';

const recieverEmail = 'huzaifaquadri1853@gmail.com';

// ============================================
// Register User
// ============================================
export const registerController = asyncHandler(async (req, res) => {
  const { email, password, fullName, role } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    throw new AppError(ERROR_MESSAGES.USER_EXISTS, HTTP_STATUS.CONFLICT);
  }
  const user = await userModel.create({
    email,
    password,
    fullName,
    role
  });
  const userResponse = {
    id: user._id,
    email: user.email,
    fullName: user.fullName,
    role: user.role
  };

  console.log(`✅ New user registered: ${user.email}`);

  const token = generateToken(res, user._id, user.email);

  res.status(HTTP_STATUS.CREATED).json({
    success: true,
    message: 'User registered successfully',
    data: userResponse,
    token: token
  });

  const sent = await sendVerificationEmail({
    // email: user.email,
    email: recieverEmail, //for now; will send mail only on this email as dummy emails will be used in testing
    name: user.name,
    verificationLink:
      process.env.backendURL ||
      `http://localhost:${config.PORT}/api/auth/verify/${token}`
  });
  if (sent) {
    console.log('📧 Verification Email sent successfully');
  } else {
    console.log('❎ Verification Email not sent');
  }
});

////////////////////////
// export async function registerController(req, res) {
//   const { email, password, fullName, role } = req.body;

//   try {
//     // Check if user already exists
//     const isUsrAlreadyExist = await userModel.findOne({
//       email,
//     });
//     if (isUsrAlreadyExist) {
//       return res.status(HTTP_STATUS.CONFLICT).json({
//         message: "User already exists",
//         success: false,
//         error: ERROR_MESSAGES.USER_EXISTS,
//       });
//     }

//     // Create new user
//     const user = await userModel.create({
//       email,
//       password,
//       fullName,
//       role: role || "admin",
//     });

//     // Generate email verification token
//     const emailVerificationToken = jwt.sign(
//       {
//         email: user.email,
//       },
//       process.env.JWT_SECRET,
//     );
//     // Send verification email
//     await sendEmail({
//       to: email,
//       subject: "Welcome to AideDesk - Please Verify Your Email",
//       text: `Welcome ${fullName}`,
//       html: `<h2>Welcome to AideDesk</h2>
//           <p>Hi ${fullName},</p>

//           <p>
//           Thanks for registering. Your account has been successfully created.
//           </p>

//           <p>
//           Please verify your email address by clicking the link below: <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}"
//            >
//            Verify Email
//           </a>
//           </p>

//           <hr/>
//           <p>AideDesk Team</p>`,
//     });

//     await sendTokenResponse(user, res, "User Register Successfully");
//   } catch (err) {
//     console.log(err);
//     return res
//       .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
//       .json({ message: "Server error" });
//   }
// }
