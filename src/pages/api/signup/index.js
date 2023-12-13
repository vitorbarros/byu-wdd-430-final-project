import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt'

const signup = async (req, res) => {
  const { name, email, password } = JSON.parse(req.body);

  const hasUser = await prisma.user.findFirst({ where: { email } });

  if (hasUser) {
    return res.status(400).json({ "message": "user already exists" });
  }

  const salt = await bcrypt.genSalt(10)
  const passHash = await bcrypt.hash(password, salt)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passHash,
    }
  });

  delete user.password;

  return res.json(user);
}

export default signup;
