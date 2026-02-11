import User from "../models/User.js";
import jwt from "jsonwebtoken";


export const login = async (req, res) => {
    console.log("LOGIN HIT", req.body);
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({ message: "Kullanıcı bulunamadı" });

    // ⚠️ ŞİMDİLİK bcrypt YOK
    if (user.password !== password)
      return res.status(401).json({ message: "Şifre hatalı" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      role: user.role,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
